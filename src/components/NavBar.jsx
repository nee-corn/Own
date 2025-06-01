import "./Styles/NavBar.css";
import "../index.css";
import { useNavigate, useLocation } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Propos } from "../pages/Propos";

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "navbar-link active" : "navbar-link";
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">Own</div>
        <div className="navbar-links">
          <a className={isActive("/")} onClick={() => navigate("/")}>
            Accueil
          </a>
          <a
            className={isActive("/a_propos")}
            onClick={() => navigate("/a_propos")}
          >
            À propos
          </a>
          <a href="#" className={isActive("/game")}>
            Games
          </a>
          <a href="#" className={isActive("/contact")}>
            Contact
          </a>
        </div>
        <div className="navbar-actions">
          <button className="navbar-button">Connexion</button>
        </div>
      </div>
    </>
  );
};
