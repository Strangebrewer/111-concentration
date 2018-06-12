import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    <header>
      <h3>Concentration</h3>
      <h4 className="header-center">{props.guessed}</h4>
      <h4 className="score-container">Score: <span className="score">{props.currentScore}</span>&nbsp; | &nbsp;High Score: <span className="high-score">{props.highScore}</span></h4>
    </header>
  </div>
);

export default Header;