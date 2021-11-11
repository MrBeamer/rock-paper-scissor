import React from "react";

export default function Badge(props) {
  const { customClasses, badgeIcon, handleClick, id } = props;

  return (
    <div onClick={handleClick} className={`badge ${customClasses}`} id={id}>
      <div className="badge__circle">
        <img className="badge__icon" src={badgeIcon} alt="icon"></img>
      </div>
    </div>
  );
}
