import React, { useState } from "react";
import "./ErrorPage.css";

const ErrorPage = () => {
  const [currentPage, setCurrentPage] = useState("home"); // Page par défaut

  const navigateTo = (page) => {
    setCurrentPage(page); // Mise à jour de la page courante
  };

  return (
    <div className="error-page">
      <h1>Effectuer vos retraits ci-dessous</h1>
      <p></p>
      <p>Choissisez le reseau de paiement et entrer vos informations</p>

      {/* 5 boutons de paiement */}
      <div className="payment-buttons">
        <button onClick={() => navigateTo("orangeMoney")}>Orange Money</button>
        <button onClick={() => navigateTo("mtnMobileMoney")}>MTN Mobile Money</button>
        <button onClick={() => navigateTo("tmoney")}>Tmoney</button>
        <button onClick={() => navigateTo("waveMoney")}>Wave Money</button>
        <button onClick={() => navigateTo("airtelMoney")}>Airtel Money</button>
      </div>

      {/* Formulaire pour chaque méthode de paiement */}
      {currentPage === "orangeMoney" && <PaymentForm method="Orange Money" navigateTo={navigateTo} />}
      {currentPage === "mtnMobileMoney" && <PaymentForm method="MTN Mobile Money" navigateTo={navigateTo} />}
      {currentPage === "tmoney" && <PaymentForm method="Tmoney" navigateTo={navigateTo} />}
      {currentPage === "waveMoney" && <PaymentForm method="Wave Money" navigateTo={navigateTo} />}
      {currentPage === "airtelMoney" && <PaymentForm method="Airtel Money" navigateTo={navigateTo} />}
    </div>
  );
};

// Composant Formulaire de paiement
const PaymentForm = ({ method, navigateTo }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [country, setCountry] = useState("");
  const [trackingCode, setTrackingCode] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Pour afficher le message d'erreur

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification des champs et affichage d'une erreur si l'un est vide
    if (!name || !surname || !number || !country || !trackingCode) {
      setErrorMessage("Veuillez remplir tous les champs correctement.");
    } else {
      // Si tout est valide, affiche une alerte et redirige vers la page d'erreur
      alert("Les retraits ne sont pas disponibles pour le moment.");
      setErrorMessage(""); // Réinitialise l'erreur
      navigateTo("error"); // Redirige vers la page d'erreur
    }
  };

  return (
    <div className="payment-form">
      <h2>Formulaire pour {method}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Prénom:
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </label>
        <label>
          Numéro:
          <input
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </label>
        <label>
          Pays:
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </label>
        <label>
          Code de suivi:
          <input
            type="text"
            value={trackingCode}
            onChange={(e) => setTrackingCode(e.target.value)}
            required
          />
        </label>
        <button type="submit">Confirmer</button>
      </form>

      {/* Affichage du message d'erreur */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default ErrorPage;
