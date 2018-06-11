import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  state = {
    guessed: "Click an image to begin",
    currentScore: 0,
    highScore: 0
  }

  render() {
    return (
      <div className="header">
        <header>
          <h3>Concentration</h3>
          <h4 className="header-center">{this.state.guessed}</h4>
          <h4 className="score-container">Score: <span className="score">{this.state.currentScore}</span>&nbsp; | &nbsp;High Score: <span className="high-score">{this.state.highScore}</span></h4>
        </header>
      </div>
    );
  }

}

export default Header;