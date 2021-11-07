import React, { useState } from "react";
import Badge from "./Badge";

export default function StartScreen() {
  const [gameStarted, setGameStarted] = useState(false);

  function handleClick(event) {
    console.log(event.currentTarget.id);
  }

  return (
    <div className="start-screen">
      <img
        className="start-screen__background"
        src="/images/bg-triangle.svg"
        alt="triangle"
      />
      <Badge
        handleClick={handleClick}
        customClasses={"badge--rock start-screen__rock"}
        badgeIcon={"/images/icon-rock.svg"}
        id="rock"
      />
      <Badge
        handleClick={handleClick}
        customClasses={"badge--paper start-screen__paper"}
        badgeIcon={"/images/icon-paper.svg"}
        id="paper"
      />
      <Badge
        handleClick={handleClick}
        customClasses={"badge--scissors start-screen__scissors"}
        badgeIcon={"/images/icon-scissors.svg"}
        id="scissors"
      />
    </div>
  );
}
