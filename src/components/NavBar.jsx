import "./Styles/NavBar.css";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Propos } from "../pages/Propos";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">Own</div>
        <div className="navbar-links">
          <a className="navbar-link active" onClick={() => navigate("/")}>
            Accueil
          </a>
          <a className="navbar-link" onClick={() => navigate("/a_propos")}>
            À propos
          </a>
          <a href="#" className="navbar-link">
            Services
          </a>
          <a href="#" className="navbar-link">
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
