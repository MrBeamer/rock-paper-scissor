import React from "react";

export default function Badge(props) {
  const { badgeColor, badgeIcon, handleClick, id } = props;

  return (
    <button onClick={handleClick} className={`badge ${badgeColor}`} id={id}>
      <div className="badge__circle">
        <img className="badge__icon" src={badgeIcon} alt="icon"></img>
      </div>
    </button>
  );
}
