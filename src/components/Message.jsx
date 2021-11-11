import React from "react";
import "animate.css";

export default function Message(props) {
  const { gameResult, resetGame } = props;

  <div className="message animate__animated animate__fadeIn">
    <h2 className="message__title ">{gameResult}</h2>
    <button onClick={resetGame} className="message__button">
      PLAY AGAIN
    </button>
  </div>;
}
