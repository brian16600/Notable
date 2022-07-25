import React from "react";
import IndexActions from "./IndexActions";
import IndexForm from "./IndexForm";
import IndexMenu from "./IndexMenu";
import IndexMiniPosts from "./IndexMiniPosts";
import IndexTopContributors from "./IndexTopContributors";
import "../assets/css/main.css";

class Sidebar extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <div className="inner">
          <section id="search" className="alt">
            <IndexForm></IndexForm>
          </section>

          <IndexMenu></IndexMenu>

          <section>
            <IndexTopContributors></IndexTopContributors>
            <IndexMiniPosts></IndexMiniPosts>
            <IndexActions></IndexActions>
          </section>

          <section>
            <header className="major">
              <h2>Get in touch</h2>
            </header>
            <p>
              If there's anything you'd like the team behind Notable to know,
              contact us at:
            </p>
            <ul className="contact">
              <li className="icon solid fa-envelope">
                <a href="#">brian16600@gmail.com</a>
              </li>
              <li className="icon solid fa-envelope">
                <a href="#">anandhjishnu@gmail.com</a>
              </li>
            </ul>
          </section>

          <footer id="footer">
            <p className="copyright">
              © Untitled. All rights reserved.{" "}
              <a href="https://unsplash.com">Unsplash</a>. Design:{" "}
              <a href="https://html5up.net">HTML5 UP</a>.
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Sidebar;
