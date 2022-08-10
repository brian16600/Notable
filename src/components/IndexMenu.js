import React from "react";
import { Link } from "react-router-dom";

class IndexMenu extends React.Component {
  render() {
    return (
      <nav id="menu">
        <header className="major">
          <h2>Menu</h2>
        </header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="profile">My Profile</Link>
          </li>
          <li>
            <a href="https://github.com/brian16600/Notable/issues">
              Submit Feedback
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default IndexMenu;
