import React from "react";
import "animate.css";
import Badge from "./Badge";

export default function StartScreen(props) {
  const { setPlayerSelected, houseSelection, setGameStarted } = props;

  function handleClick(event) {
    setGameStarted(true);
    const badgeId = event.currentTarget.id;
    setPlayerSelected(badgeId, houseSelection());
  }

  return (
    <div className="start-screen animate__animated animate__fadeIn">
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
