import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { auth, db, storage } from "../firebase-config";
import no_image from "./images/no_image.png";

function IndexPosts() {
  const [notesList, setNotesList] = useState([]);
  //const location = useLocation();
  //const moduleData = location.state;

  useEffect(() => {
    const notesRef = collection(db, "notes");
    const q = query(notesRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      console.log(snapshot.docs[0].get("description"));

      const notesList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotesList(notesList);
    });
  }, []);

  return (
    <div className="posts">
      {notesList.map(
        ({ id, title, description, notesUrl, createdAt, likes }) => (
          <article>
            <a className="image">
              <img src={no_image} />
            </a>
            <h3>{title}</h3>
            <p>{description}</p>
            <ul className="actions">
              <li>
                <Link
                  to={`/notes/${id}`}
                  state={{
                    title: { title },
                    notesId: { id },
                    notesUrl: { notesUrl },
                    description: { description },
                    createdAt: { createdAt },
                  }}
                  className="button"
                >
                  View
                </Link>
              </li>
            </ul>
          </article>
        )
      )}
    </div>
  );
}

export default IndexPosts;
