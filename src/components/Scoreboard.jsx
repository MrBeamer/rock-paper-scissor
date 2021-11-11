import React from "react";
import Rules from "./Rules";

export default function Scoreboard(props) {
  const { score } = props;

  return (
    <div className="scoreboard">
      <img className="scoreboard__img" src="/images/logo.svg" alt="logo" />
      <Rules />
      <div className="scoreboard__display">
        <p className="scoreboard__title">Score</p>
        <p className="scoreboard__score">{score}</p>
      </div>
    </div>
  );
}
