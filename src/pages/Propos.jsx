import { NavBar } from "../components/NavBar";
import RightPanel from "../components/RightPanel";
import "./styles/Propos.css";
import "../index.css";
import { useState } from "react";

export const Propos = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {isActive && <RightPanel />}
      <div className="h-screen background flex justify-center items-center w-full/2">
        Page a propos
        <div className="hero-button">
          <button
            className="primary-button "
            onClick={() => {
              setIsActive(() => !isActive);
            }}
          >
            {" "}
            Click Me{" "}
          </button>
        </div>
      </div>
    </>
  );
};
