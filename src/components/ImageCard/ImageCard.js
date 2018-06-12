import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <img
    className="game-img"
    src={props.image}
    alt={props.name}
    id={props.id}
    onClick={props.chooseImage(props.id)}
  />
);

export default ImageCard;