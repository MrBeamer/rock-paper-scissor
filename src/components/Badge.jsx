import React from "react";

export default function Badge(props) {
  return (
    <div className="badge badge--scissors">
      <div className="badge__circle">
        <img
          className="badge__icon"
          src="/images/icon-rock.svg"
          alt="rock icon"
        ></img>
      </div>
    </div>
  );
}
