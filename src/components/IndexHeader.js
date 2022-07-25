import React from "react";
import smalllogo from "./images/smalllogo.png";

import { Link } from "react-router-dom";

class IndexHeader extends React.Component {
  render() {
    return (
      <header id="header">
        <a href="index.html" className="logo">
          <Link to="/">
            <img src={smalllogo} />
          </Link>
        </a>
      </header>
    );
  }
}

export default IndexHeader;
