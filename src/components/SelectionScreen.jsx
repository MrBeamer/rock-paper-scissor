import React, { useState, useEffect } from "react";
import Badge from "./Badge";
import "animate.css";
export default function SelectionScreen(props) {
  const { playerSelected, houseSelected } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    //delays the rendering of the houseSelected coin and the animation called move block
    const timeout = setTimeout(() => {
      setShow(true);
    }, 900);
    //cleanup delay debounce
    return () => clearTimeout(timeout);
  }, []);

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

      <div className={show ? "move-block" : "placeholder"}></div>

      <div className="selection__frame--house">
        <h2 className="selection__title">THE HOUSE PICKED</h2>
        {show ? (
          <Badge
            customClasses={`badge--${houseSelected} animate__animated animate__flip`}
            badgeIcon={`/images/icon-${houseSelected}.svg`}
            id={houseSelected}
          />
        ) : (
          <div className="selection__placeholder"></div>
        )}
      </div>
    </div>
  );
}
