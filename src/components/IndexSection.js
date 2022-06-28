import React from "react";
import { Link } from "react-router-dom";
import student_studying from "./images/student_studying.jpeg";

class IndexSection extends React.Component {
  render() {
    return (
      <section id="banner">
        <div className="content">
          <header>
            <h1>High quality notes are just a search away.</h1>
            <p>
              Get started by typing a module code into the search bar - it's
              that easy!
            </p>
          </header>
          <p />
          <ul className="actions">
            <li>
              <Link to="/upload" className="button big">
                Start Uploading
              </Link>
            </li>
          </ul>
        </div>
        <span className="image object">
          <img src={student_studying} alt />
        </span>
      </section>
    );
  }
}

export default IndexSection;
