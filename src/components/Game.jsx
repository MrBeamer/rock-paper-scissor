import React from "react";
import Badge from "./Badge";

export default function Game() {
  function handleClick(event) {
    console.log(event.currentTarget.id);
  }

  return (
    <div className="game">
      <img
        className="game__background"
        src="/images/bg-triangle.svg"
        alt="triangle"
      />
      <Badge
        handleClick={handleClick}
        badgeColor={"badge--rock game__rock"}
        badgeIcon={"/images/icon-rock.svg"}
        id="rock"
      />
      <Badge
        handleClick={handleClick}
        badgeColor={"badge--paper game__paper"}
        badgeIcon={"/images/icon-paper.svg"}
        id="paper"
      />
      <Badge
        handleClick={handleClick}
        badgeColor={"badge--scissors game__scissors"}
        badgeIcon={"/images/icon-scissors.svg"}
        id="scissors"
      />
    </div>
  );
}
