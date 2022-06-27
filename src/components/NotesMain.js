import React from "react";
import { useLocation } from "react-router-dom";

function NotesMain() {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  return (
    <section>
      <header className="main">
        <h1>{data.title.title}</h1>
      </header>
      <span className="image main">
        <img src="images/djikstra.png" alt />
      </span>
      <h2>Djikstra's algorithm Notes</h2>
      <h3>uploaded by User1 on: 12/05/2022, 12:00</h3>
      <p>{data.description.description}</p>
      <ul className="actions">
        <li>
          <a
            href={data.notesUrl.notesUrl}
            className="button"
            target="_blank"
            download="CS2040Snotes"
          >
            Download
          </a>
        </li>
      </ul>
    </section>
  );
}

export default NotesMain;
