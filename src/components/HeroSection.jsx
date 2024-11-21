import React from "react";

const HeroSection = ({ navigateTo }) => {
  const handleDashboardClick = () => {
    window.location.href = "https://fr.tradingview.com/chart/"; // Remplacez par le lien de votre choix
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>
          Boostez votre Capital avec <span>InvestPro</span>
        </h1>
        <p>
          Rejoignez notre plateforme de trading et débloquez votre potentiel financier !
        </p>
        <div className="cta-buttons">
          <button
            className="invest-button"
            onClick={() => navigateTo("invest")} // Navigue vers Invest
          >
            Je veux investir
          </button>
        </div>
        <div className="cta-buttons">
          <button
            className="invest-button"
            onClick={() => navigateTo("retirer")} // Navigue vers Retirer
          >
            Je veux retirer
          </button>
        </div>

        <div className="cta-buttons">
          <button
            className="invest-button"
            onClick={handleDashboardClick} // Navigue vers Retirer
          >
            Suivre le marcher
          </button>
        </div>
        
      </div>
      <div className="video-container">
        <video
          src="https://static.tradingview.com/static/bundles/chart-big.a7d994603f412a3a4a52.webm"
          controls
          loop
          autoPlay
          muted
          className="trading-video"
        ></video>
      </div>
    </section>
  );
};

export default HeroSection;
