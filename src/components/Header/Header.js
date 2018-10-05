import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    <div className="title"> {props.message}</div>
    <div className="scores">
      Score: {props.score} | Highscore: {props.highScore} 
    </div>
  </div>
);

export default Header;