import { NavBar } from "../components/NavBar";
import "../index.css";
import "./styles/HomePage.css";

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="home-container">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Bienvenue sur MonSite</h1>
            <p className="hero-subtitle">
              Découvrez notre univers créatif et innovant
            </p>
            <div className="hero-buttons">
              <button className="primary-button">Commencer</button>
              <button className="secondary-button">En savoir plus</button>
            </div>
          </div>
          <div className="hero-image">
            {/* Placeholder pour une image ou illustration */}
            <div className="image-placeholder"></div>
          </div>
        </section>

        <section className="features-section">
          <h2 className="section-title">Nos Services</h2>
          <div className="features-grid">
            {[1, 2, 3].map((item) => (
              <div key={item} className="feature-card">
                <div className="feature-icon"></div>
                <h3 className="feature-title">Service {item}</h3>
                <p className="feature-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam scelerisque justo ac eros interdum, a sagittis dolor
                  convallis.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
