import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Invest from "./components/Invest";
import Retirer from "./components/Retirer";
import Footer from "./components/Footer";
import "./index.css";
import ProgramsSection from "./components/ProgramsSection";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home"); // Par défaut, la page d'accueil

  const navigateTo = (page) => {
    setCurrentPage(page); // Mise à jour de la page courante
  };

  return (
    <div className="app">
      <Header />
      {currentPage === "home" && <HeroSection navigateTo={navigateTo} />}
      {currentPage === "invest" && <Invest />}
      {currentPage === "retirer" && <Retirer />}
     <ProgramsSection />
      <Footer />
    </div>
  );
};

export default App;
