import React, { useState } from "react";
import "animate.css";

export default function Rules() {
  const [hidden, setHidden] = useState(true);

  function showModal() {
    setHidden(false);
  }

  function hideModal() {
    setHidden(true);
  }

  return (
    <div className="modal">
      <button onClick={showModal} className="modal__button">
        RULES
      </button>
      <div
        className={`modal__popup animate__animated animate__fadeIn`}
        hidden={hidden}
      >
        <div className="modal__fix">
          <div className="modal__header">
            <h2 className="modal__headline">RULES</h2>
            <i onClick={hideModal} className="fas fa-times"></i>
          </div>
          <img
            className="modal__img"
            src="/images/image-rules.svg"
            alt="rules"
          />
        </div>
      </div>
    </div>
  );
}
