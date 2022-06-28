import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import no_image from "./images/no_image.png";

function NotesMain() {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  /**scroll to top automatically. Since coming from some
  pages like home, the user will be at the bottom of the page.
  */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <header className="main">
        <h1>{data.title.title}</h1>
      </header>
      <span className="image main">
        <img src={no_image} alt />
      </span>
      <h3>uploaded by User1 on: {data.createdAt.createdAt.seconds}</h3>
      <p>{data.description.description}</p>
      <ul className="actions">
        <li>
          <a
            href={data.notesUrl.notesUrl}
            className="button"
            target="_blank"
            download={data.title.title}
          >
            Download
          </a>
        </li>
      </ul>
    </section>
  );
}

export default NotesMain;
