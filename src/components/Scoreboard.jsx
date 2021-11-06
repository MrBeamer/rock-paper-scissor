import React from "react";

export default function Scoreboard() {
  return (
    <div className="scoreboard">
      <img src="/images/logo.svg" alt="logo" />
      <div className="scoreboard__display">
        <p className="scoreboard__title">Score</p>
        <p className="scoreboard__score">23</p>
      </div>
    </div>
  );
}
