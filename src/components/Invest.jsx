import React, { useState, useEffect } from "react";
import "./InvestPage.css";

const InvestPage = () => {
  const [amount, setAmount] = useState("");
  const [calculatedAmount, setCalculatedAmount] = useState(0);
  const [formData, setFormData] = useState(null);
  const [trackingCodeEntered, setTrackingCodeEntered] = useState(false);
  const [trackingCode, setTrackingCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    setCalculatedAmount(value * 3.5745);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      country: e.target.country.value,
      name: e.target.name.value,
      phone: e.target.phone.value,
      paymentMethod: e.target.paymentMethod.value,
      amount: amount,
      calculatedAmount: calculatedAmount,
    };
    setFormData(data);
  };

  const handleTrackingCodeSubmit = () => {
    if (trackingCode.trim() === "") {
      alert("Veuillez entrer un code de suivi.");
      return;
    }
    setTrackingCodeEntered(true); // Marquer le code de suivi comme entré
    setIsLoading(true); // Démarrer le chargement
  };

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsLoading(false);
            return 100;
          }
          return prev + 10; // Incrément progress
        });
      }, 5000); // Augmentation toutes les 500ms
    }
  }, [isLoading]);

  const handleReceivePaymentClick = () => {
    alert(
      "Vous devez payer les frais de déblocage pour recevoir vos bénéfices."
    );
  };

  return (
    <div className="invest-page">
      {!formData ? (
        <>
          <h1>Formulaire d'investissement</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Choisissez votre pays
              <select name="country" required>
                <option value="">-- Sélectionnez --</option>
                <option value="South Africa">Afrique du Sud</option>
<option value="Algeria">Algérie</option>
<option value="Angola">Angola</option>
<option value="Benin">Bénin</option>
<option value="Botswana">Botswana</option>
<option value="Burkina Faso">Burkina Faso</option>
<option value="Burundi">Burundi</option>
<option value="Cabo Verde">Cabo Verde</option>
<option value="Cameroon">Cameroun</option>
<option value="Central African Republic">République centrafricaine</option>
<option value="Chad">Tchad</option>
<option value="Comoros">Comores</option>
<option value="Cote d'Ivoire">Côte d'Ivoire</option>
<option value="Democratic Republic of the Congo">République Démocratique du Congo</option>
<option value="Djibouti">Djibouti</option>
<option value="Egypt">Égypte</option>
<option value="Equatorial Guinea">Guinée équatoriale</option>
<option value="Eritrea">Érythrée</option>
<option value="Eswatini">Eswatini</option>
<option value="Ethiopia">Éthiopie</option>
<option value="Gabon">Gabon</option>
<option value="Gambia">Gambie</option>
<option value="Ghana">Ghana</option>
<option value="Guinea">Guinée</option>
<option value="Guinea-Bissau">Guinée-Bissau</option>
<option value="Kenya">Kenya</option>
<option value="Lesotho">Lesotho</option>
<option value="Liberia">Libéria</option>
<option value="Libya">Libye</option>
<option value="Madagascar">Madagascar</option>
<option value="Malawi">Malawi</option>
<option value="Mali">Mali</option>
<option value="Mauritania">Mauritanie</option>
<option value="Mauritius">Maurice</option>
<option value="Morocco">Maroc</option>
<option value="Mozambique">Mozambique</option>
<option value="Namibia">Namibie</option>
<option value="Niger">Niger</option>
<option value="Nigeria">Nigeria</option>
<option value="Rwanda">Rwanda</option>
<option value="São Tomé and Príncipe">São Tomé-et-Principe</option>
<option value="Senegal">Sénégal</option>
<option value="Seychelles">Seychelles</option>
<option value="Sierra Leone">Sierra Leone</option>
<option value="Somalia">Somalie</option>
<option value="South Sudan">Soudan du Sud</option>
<option value="Sudan">Soudan</option>
<option value="Tanzania">Tanzanie</option>
<option value="Togo">Togo</option>
<option value="Tunisia">Tunisie</option>
<option value="Uganda">Ouganda</option>
<option value="Zambia">Zambie</option>
<option value="Zimbabwe">Zimbabwe</option>

                {/* Ajoutez les autres options ici */}
              </select>
            </label>

            <label>
              Nom complet
              <input type="text" name="name" placeholder="Votre nom" required />
            </label>

            <label>
              Numéro de téléphone :
              <input type="tel" name="phone" placeholder="Ex: +221 77 123 4567" required />
            </label>

            <label>
              Méthode de paiement
              <select name="paymentMethod" required>
                <option value="">-- Sélectionnez --</option>
                <option value="OrangeMoney">Orange Money</option>
                <option value="Wave">Wave Money</option>
                <option value="MTN">MTN Mobile Money</option>
                <option value="MTN">TMoney</option>
                <option value="MTN">Airtel Money</option>
              </select>
            </label>

            <label>
              Montant à investir
              <input
                type="number"
                placeholder="Montant (FCFA)"
                value={amount}
                onChange={handleAmountChange}
                required
              />
            </label>

            <label>
              Montant à recevoir
              <input type="text" value={calculatedAmount + " FCFA"} readOnly />
            </label>

            <button type="submit">Soumettre</button>
          </form>
        </>
      ) : (
        <>
          <h1>Résumé de votre investissement</h1>
          <p><strong>Nom :</strong> {formData.name}</p>
          <p><strong>Numéro de téléphone :</strong> {formData.phone}</p>
          <p><strong>Pays :</strong> {formData.country}</p>
          <p><strong>Méthode de paiement :</strong> {formData.paymentMethod}</p>
          <p><strong>Montant investi :</strong> {formData.amount} FCFA</p>
          <p><strong>Montant à recevoir :</strong> {formData.calculatedAmount} FCFA</p>

          {!trackingCodeEntered ? (
            <div className="tracking-code">
              <h2>Entrer le code de suivi</h2>
              <input
                type="text"
                value={trackingCode}
                onChange={(e) => setTrackingCode(e.target.value)}
                placeholder="Entrez votre code de suivi"
              />
              <button onClick={handleTrackingCodeSubmit}>Valider</button>
            </div>
          ) : isLoading ? (
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
          ) : (
            <div>
              <a
                href={`https://wa.me/?text=Bonjour,%20je%20souhaite%20en%20savoir%20plus%20sur%20mon%20investissement.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="whatsapp-button">WhatsApp</button>
              </a>
              <button className="receive-payment-button" onClick={handleReceivePaymentClick}>
                Recevoir mon paiement
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default InvestPage;
