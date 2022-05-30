import React from "react";

class NotesMain extends React.Component {
  render() {
    return (
      <section>
        <header className="main">
          <h1>Title of Notes</h1>
        </header>
        <span className="image main">
          <img src="images/djikstra.png" alt />
        </span>
        <h2>Djikstra's algorithm Notes</h2>
        <h3>uploaded by User1 on: 12/05/2022, 12:00</h3>
        <p>
          Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
          sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit
          amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat.
          Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna
          ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien
          risus, commodo eget turpis at, elementum convallis elit. Pellentesque
          enim turpis, hendrerit.
        </p>
        <ul className="actions">
          <li>
            <a
              href="assets/notes/cs2040snotes.pdf"
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
}

export default NotesMain;
