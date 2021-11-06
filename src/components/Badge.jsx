import React from "react";

export default function Badge(props) {
  const { badgeColor, badgeIcon } = props;
  return (
    <div className={`badge ${badgeColor}`}>
      <div className="badge__circle">
        <img className="badge__icon" src={badgeIcon} alt="rock icon"></img>
      </div>
    </div>
  );
}
