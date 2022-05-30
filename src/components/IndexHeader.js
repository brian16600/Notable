import React from "react";
import smalllogo from './images/smalllogo.png'

class IndexHeader extends React.Component {
  render() {
    return (
      <header id="header">
        <a href="index.html" className="logo">
          <img src={smalllogo} />
        </a>
        <div>
        <h3> Register New User </h3>
        <input
          placeholder="Email"
        />
        <input
          placeholder="Password"
        />

        <button> Create User</button>
      </div>
      <div>
        <h3> Sign in </h3>
        <input
          placeholder="Email"
        />
        <input
          placeholder="Password"
        />

        <button> Sign in</button>
      </div>

      <div>
        <h4> User Logged In: </h4>

        <button> Sign Out </button>
      </div>

        <ul className="icons">
          <li>
            <a href="#" className="icon brands fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-snapchat-ghost">
              <span className="label">Snapchat</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-medium-m">
              <span className="label">Medium</span>
            </a>
          </li>
        </ul>
      </header>
    );
  }
}

export default IndexHeader;
