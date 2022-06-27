import { ref, getDownloadURL, listAll } from "firebase/storage";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, db, storage } from "../firebase-config";
import djikstra from "./images/djikstra.png";
import binary_search_tree from "./images/binary_search_tree.png";
import cs1101s from "./images/cs1101s.png";
import cs2030s from "./images/cs2030s.png";

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
              <img src={djikstra} />
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
