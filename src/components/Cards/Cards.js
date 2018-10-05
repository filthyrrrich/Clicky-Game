import React from "react";
import "./Cards.css";

const Cards = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image}  onClick={() => props.clickHandler(props.id)}/>
    </div>
  </div>
);

export default Cards;
