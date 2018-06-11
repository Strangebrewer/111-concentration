import React, { Component } from "react";
import "./Game.css";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic2.jpg";
import pic3 from "./images/pic3.jpg";
import pic4 from "./images/pic4.jpeg";
import pic5 from "./images/pic5.jpg";
import pic6 from "./images/pic6.JPG";
import pic7 from "./images/pic7.jpg";
import pic8 from "./images/pic8.jpg";
import pic9 from "./images/pic9.jpg";
import pic10 from "./images/pic10.jpeg";
import pic11 from "./images/pic11.jpg";
import pic12 from "./images/pic12.png";

class Game extends Component {
  state = {
    images: []
  }

  //  should Image be its own component...? Seems that it should...
  render() {
    return (
      <div className="game-img-container">
        <img className="game-img" id="image-1" data-clicked="false" src={pic1} alt="" />
        <img className="game-img" id="image-2" data-clicked="false" src={pic2} alt="" />
        <img className="game-img" id="image-3" data-clicked="false" src={pic3} alt="" />
        <img className="game-img" id="image-4" data-clicked="false" src={pic4} alt="" />
        <img className="game-img" id="image-5" data-clicked="false" src={pic5} alt="" />
        <img className="game-img" id="image-6" data-clicked="false" src={pic6} alt="" />
        <img className="game-img" id="image-7" data-clicked="false" src={pic7} alt="" />
        <img className="game-img" id="image-8" data-clicked="false" src={pic8} alt="" />
        <img className="game-img" id="image-9" data-clicked="false" src={pic9} alt="" />
        <img className="game-img" id="image-10" data-clicked="false" src={pic10} alt="" />
        <img className="game-img" id="image-11" data-clicked="false" src={pic11} alt="" />
        <img className="game-img" id="image-12" data-clicked="false" src={pic12} alt="" />
      </div>
    );
  }

}

export default Game;