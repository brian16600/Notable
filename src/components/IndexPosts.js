import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { db } from "../firebase-config";
import no_image from "./images/no_image.png";

function IndexPosts() {
  const [notesList, setNotesList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const notesRef = collection(db, "notes");
    const q = query(notesRef, orderBy("createdAt", "desc"));
    if (location.pathname.toString().includes("module")) {
      onSnapshot(q, (snapshot) => {
        const moduleCode = location.state.moduleCode.entry
          .toString()
          .toLowerCase();

        const notesList = new Array();
        for (let i = 0; i < snapshot.docs.length; i++) {
          const doc = snapshot.docs[i];
          const docTitle = doc.get("title");
          const docModuleCode = doc.get("moduleCode");
          if (
            docTitle.toString().toLowerCase().includes(moduleCode) ||
            docModuleCode.toString().toLowerCase().includes(moduleCode) ||
            docTitle.toString().toLowerCase() === moduleCode ||
            docModuleCode.toString().toLowerCase() === moduleCode
          ) {
            notesList.push({ key: doc.id, id: doc.id, ...doc.data() });
          }
        }
        setNotesList(notesList);
      });
    } else {
      onSnapshot(q, (snapshot) => {
        const notesList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNotesList(notesList);
      });
    }
  }, [location.state]);

  return (
    <div className="posts">
      {notesList.map(
        ({ id, title, description, notesUrl, createdAt, moduleCode }) => (
          <article>
            <a className="image">
              <img src={no_image} />
            </a>
            <h3>{title}</h3>
            <h3>Module Code: {moduleCode}</h3>
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
                    moduleCode: { moduleCode },
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
