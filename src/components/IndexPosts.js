import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { db } from "../firebase-config";
import no_image from "./images/no_image.png";

function IndexPosts() {
  const [notesList, setNotesList] = useState([]);
  const [overallNotesList, setOverallNotesList] = useState([]);
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [pageArray, setPageArray] = useState([]);

  useEffect(() => {
    const notesRef = collection(db, "notes");
    const q = query(notesRef, orderBy("createdAt", "desc"));
    if (location.pathname.toString().includes("module")) {
      onSnapshot(q, (snapshot) => {
        const moduleCode = location.state.moduleCode.entry
          .toString()
          .toLowerCase();

        var counter = 0;
        var notes = new Array();
        const tempNotesList = new Array();
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
            notes.push(snapshot.docs[i].data());
            counter += 1;
            if (counter == 6) {
              counter = 0;
              tempNotesList.push(notes);
              var notes = new Array();
            }
          }
        }
        if (counter !== 6) {
          tempNotesList.push(notes);
        }
        setNumberOfPages(tempNotesList.length);
        setOverallNotesList(tempNotesList);
        setNotesList(tempNotesList[currentPage - 1]);

        var pageArr = [];
        for (var i = 1; i < numberOfPages + 1; i++) {
          pageArr.push(i);
        }
        setPageArray(pageArr);
      });
    } else {
      onSnapshot(q, (snapshot) => {
        var counter = 0;
        const notesList = new Array();
        var notes = new Array();
        for (var i = 0; i < snapshot.docs.length; i++) {
          notes.push(snapshot.docs[i].data());
          counter += 1;
          if (counter == 6) {
            counter = 0;
            notesList.push(notes);
            var notes = new Array();
          }
        }
        if (counter !== 6) {
          notesList.push(notes);
        }
        setNumberOfPages(notesList.length);
        setOverallNotesList(notesList);
        setNotesList(notesList[currentPage - 1]);
        var pageArr = [];
        for (var i = 1; i < numberOfPages + 1; i++) {
          pageArr.push(i);
        }
        setPageArray(pageArr);
      });
    }
  }, [location.state, numberOfPages]);

  //console.log(notesList);
  return (
    <div>
      <div className="posts">
        {notesList &&
          notesList.map &&
          notesList.map(
            ({ id, title, description, notesUrl, createdAt, moduleCode }) => (
              <article>
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
      <ul class="pagination">
        {pageArray.map((page) =>
          page === currentPage ? (
            <li>
              <a
                class="page active"
                onClick={() => {
                  setCurrentPage(page);
                  setNotesList(overallNotesList[page - 1]);
                }}
              >
                {page}
              </a>
            </li>
          ) : (
            <li>
              <a
                class="page"
                onClick={() => {
                  setCurrentPage(page);
                  setNotesList(overallNotesList[page - 1]);
                }}
              >
                {page}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default IndexPosts;
