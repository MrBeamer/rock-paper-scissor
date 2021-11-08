import React from "react";

export default function Message(props) {
  const { gameResult, resetGame } = props;
  return (
    <div className="message">
      <h2 className="message__title">{gameResult}</h2>

      {gameResult ? (
        <button onClick={resetGame} className="message__button">
          PLAY AGAIN
        </button>
      ) : null}
    </div>
  );
}
