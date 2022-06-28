import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, db, storage } from "../firebase-config";
import no_image from "./images/no_image.png";

function IndexPosts() {
  const [notesList, setNotesList] = useState([]);
  /**
  useEffect(() => {
    setNotesList([]);
    const fileListRef = ref(storage, "notes/");
    listAll(fileListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setNotesList((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  */

  useEffect(() => {
    const notesRef = collection(db, "notes");
    const q = query(notesRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const notesList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotesList(notesList);
      console.log(notesList);
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
