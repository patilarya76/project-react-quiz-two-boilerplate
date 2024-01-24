import React from "react";
import "./home.css";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home">
          <h1>Quiz App</h1>
          <button id="homeplay">Play</button>
        </div>
      </>
    );
  }
}