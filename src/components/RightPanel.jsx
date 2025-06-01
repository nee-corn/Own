import React from "react";
import "./Styles/RightPanel.css";
import "../index.css";

export default function RightPanel({ setIsActive }) {
  return (
    <div className="right-panel">
      <div className="hero-buttons">
        <button
          className="primary-button"
          onClick={() => {
            setIsActive(() => false);
          }}
        >
          X
        </button>
      </div>
      <div>RightPanel</div>
    </div>
  );
}
