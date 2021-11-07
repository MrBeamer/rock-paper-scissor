import React from "react";
import Badge from "./Badge";

export default function SelectionScreen(props) {
  const { playerSelected, houseSelected } = props;

  return (
    <div className="selection">
      <div className="selection__frame--player">
        <h2 className="selection__title">YOU PICKED</h2>
        <Badge
          customClasses={`badge--${playerSelected}`}
          badgeIcon={`/images/icon-${playerSelected}.svg`}
          id={playerSelected}
        />
      </div>
      <div className="selection__frame--house">
        <h2 className="selection__title">THE HOUSE PICKED</h2>
        <Badge
          customClasses={`badge--${houseSelected}`}
          badgeIcon={`/images/icon-${houseSelected}.svg`}
          id={houseSelected}
        />
      </div>
    </div>
  );
}
