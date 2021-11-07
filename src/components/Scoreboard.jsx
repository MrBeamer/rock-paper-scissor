import React from "react";

export default function Scoreboard(props) {
  const { score } = props;
  return (
    <div className="scoreboard">
      <img src="/images/logo.svg" alt="logo" />
      <div className="scoreboard__display">
        <p className="scoreboard__title">Score</p>
        <p className="scoreboard__score">{score}</p>
      </div>
    </div>
  );
}
