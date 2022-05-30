import React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import djikstra from './images/djikstra.png'
import binary_search_tree from './images/binary_search_tree.png'
import cs1101s from './images/cs1101s.png'
import cs2030s from './images/cs2030s.png'
import cs2040s from './images/cs2040s.jpg'
import orbital from './images/orbital.jpg'

class IndexPosts extends React.Component {
  render() {
    return (
      <div className="posts">

        <article>
          <a href="#" className="image">
            <img src={djikstra} alt />
          </a>
          <h3>Djikstra's Algorithm</h3>
          <p>
            Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.
            Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat
            tempus aliquam.
          </p>
          <ul className="actions">
            <li>
              <a href="notes.html" className="button">
                View
              </a>
            </li>
          </ul>
        </article>
        <article>
          <a href="#" className="image">
            <img src={binary_search_tree} alt />
          </a>
          <h3>Binary Search Tree</h3>
          <p>
            Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.
            Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat
            tempus aliquam.
          </p>
          <ul className="actions">
            <li>
              <a href="../notes.html" className="button">
                View
              </a>
            </li>
          </ul>
        </article>
        <article>
          <a href="#" className="image">
            <img src={cs1101s} alt />
          </a>
          <h3>CS1101S Notes</h3>
          <p>
            Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.
            Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat
            tempus aliquam.
          </p>
          <ul className="actions">
            <li>
              <a href="../notes.html" className="button">
                View
              </a>
            </li>
          </ul>
        </article>
        <article>
          <a href="#" className="image">
            <img src={cs2030s} alt />
          </a>
          <h3>John's CS2030S Notes</h3>
          <p>
            Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.
            Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat
            tempus aliquam.
          </p>
          <ul className="actions">
            <li>
              <a href="../notes.html" className="button">
                View
              </a>
            </li>
          </ul>
        </article>
        <article>
          <a href="#" className="image">
            <img src={cs2040s} alt />
          </a>
          <h3>CS2040 Summary Notes</h3>
          <p>
            Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.
            Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat
            tempus aliquam.
          </p>
          <ul className="actions">
            <li>
              <a href="../notes.html" className="button">
                View
              </a>
            </li>
          </ul>
        </article>
        <article>
          <a href="#" className="image">
            <img src={orbital} alt />
          </a>
          <h3>Orbital 2022 Notes</h3>
          <p>
            Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.
            Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat
            tempus aliquam.
          </p>
          <ul className="actions">
            <li>
              <a href="../notes.html" className="button">
                View
              </a>
            </li>
          </ul>
        </article>
      </div>
    );
  }
}

export default IndexPosts;
