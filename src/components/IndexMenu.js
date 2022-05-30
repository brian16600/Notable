import React from "react";

class IndexMenu extends React.Component {
  render() {
    return (
      <nav id="menu">
        <header className="major">
          <h2>Menu</h2>
        </header>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="generic.html">My Profile</a>
          </li>
          <li>
            <span className="opener">History</span>
            <ul>
              <li>
                <a href="#">Download History</a>
              </li>
              <li>
                <a href="#">Upload History</a>
              </li>
            </ul>
          </li>
          <li>
            <span className="opener">View Other Profiles</span>
            <ul>
              <li>
                <a href="#">Rate notes</a>
              </li>
              <li>
                <a href="#">Comment on notes</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Submit Feedback</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default IndexMenu;
