import React from "react";
import Badge from "./Badge";

export default function Game() {
  return (
    <div className="game">
      <img
        className="game__background"
        src="/images/bg-triangle.svg"
        alt="triangle"
      />
      <Badge
        badgeColor={"badge--rock game__rock"}
        badgeIcon={"/images/icon-rock.svg"}
      />
      <Badge
        badgeColor={"badge--paper game__paper"}
        badgeIcon={"/images/icon-paper.svg"}
      />
      <Badge
        badgeColor={"badge--scissors game__scissors"}
        badgeIcon={"/images/icon-scissors.svg"}
      />
    </div>
  );
}
