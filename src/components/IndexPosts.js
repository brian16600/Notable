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
    const notesRef = collection(db, "Notes");
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
      {notesList.map((url) => (
        <article>
          <a href={url} className="image">
            <img src={djikstra} />
          </a>
          <h3>{url}</h3>
          <p>
            Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.
            Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat
            tempus aliquam.
          </p>
        </article>
      ))}
      <article>
        <a href="#" className="image">
          <img src={djikstra} alt />
        </a>
        <h3>Djikstra's Algorithm</h3>
        <p>
          Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.
          Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat
          tempus aliquam.
        </p>
        <ul className="actions">
          <li>
            <Link to="/notes" className="button">
              View
            </Link>
          </li>
        </ul>
      </article>
      <article>
        <a href="#" className="image">
          <img src={binary_search_tree} alt />
        </a>
        <h3>Binary Search Tree</h3>
        <p>
          Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.
          Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat
          tempus aliquam.
        </p>
        <ul className="actions">
          <li>
            <a href="../notes.html" className="button">
              View
            </a>
          </li>
        </ul>
      </article>
      <article>
        <a href="#" className="image">
          <img src={cs1101s} alt />
        </a>
        <h3>CS1101S Notes</h3>
        <p>
          Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.
          Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat
          tempus aliquam.
        </p>
        <ul className="actions">
          <li>
            <a href="../notes.html" className="button">
              View
            </a>
          </li>
        </ul>
      </article>
      <article>
        <a href="#" className="image">
          <img src={cs2030s} alt />
        </a>
        <h3>John's CS2030S Notes</h3>
        <p>
          Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.
          Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat
          tempus aliquam.
        </p>
        <ul className="actions">
          <li>
            <a href="../notes.html" className="button">
              View
            </a>
          </li>
        </ul>
      </article>
    </div>
  );
}

export default IndexPosts;
