import React from "react";
import student1 from './images/student1.jpg'
import gold_trophy from './images/gold_trophy.jpg'
import student2 from './images/student2.jpg'
import silver_trophy from './images/silver_trophy.jpg'
import student3 from './images/student3.jpg'
import bronze_trophy from './images/bronze_trophy.jpg'

class IndexMiniPosts extends React.Component {
  render() {
    return (
      <div className="mini-posts">
        <p>
          <a href="#" className="image">
            <img src={student1} alt width={100} height={100} />
          </a>
          <br />
          <br />
          <a href="#" className="image">
            <img src={gold_trophy} alt width={30} height={30} />
          </a>
        </p>
        <h2>#1:</h2>
        <h3>User1</h3>
        <p />
        <p>
          <a href="#" className="image">
            <img src={student2} alt width={100} height={100} />
          </a>
          <br />
          <br />
          <a href="#" className="image">
            <img src={silver_trophy} alt width={30} height={30} />
          </a>
        </p>
        <h2>#2:</h2>
        <h3>User2</h3>
        <p />
        <p>
          <a href="#" className="image">
            <img src={student3} alt width={100} height={100} />
          </a>
          <br />
          <br />
          <a href="#" className="image">
            <img src={bronze_trophy} alt width={30} height={30} />
          </a>
        </p>
        <h2>#3:</h2>
        <h3>User3</h3>
        <p />
      </div>
    );
  }
}

export default IndexMiniPosts;
