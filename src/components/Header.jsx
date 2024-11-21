import React from "react";

const Header = () => {
  // Fonction pour rediriger vers l'URL externe
  const handleDashboardClick = () => {
    window.location.href = "https://fr.tradingview.com/chart/"; // Remplacez par le lien de votre choix
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="InvestPro Logo" />
      </div>
      <nav>
        <button className="cta-button" onClick={handleDashboardClick}>
          Dashboard
        </button>
      </nav>
    </header>
  );
};

export default Header;

