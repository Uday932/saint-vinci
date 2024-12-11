import React, { useState } from 'react';
import '../Inscription/Inscription.css';
import monImage from '../../assets/MonImage.png';  // Importer l'image

const Inscription = () => {
  // On crée un état pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    naissance: '',
    classe: '',
  });

  // Liste des classes de Petite Section (PS) à CM2
  const classes = [
    "PS", "MS", "GS", "CP", "CE1", "CE2", "CM1", "CM2"
  ];

  // État pour gérer la soumission du formulaire
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fonction pour gérer les changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici on pourrait envoyer les données à une base de données ou autre
    console.log('Élève inscrit :', formData);
    setIsSubmitted(true); // Marque la soumission du formulaire
  };

  return (
    <div className="inscription-container">
      {/* Affichage de l'image */}
      <div className="image-container">
        <img src={monImage} alt="Une belle image" className="inscription-image" />
      </div>
      
      <h2 className="form-title">Inscription des élèves</h2>
      
      {isSubmitted && (
        <div className="confirmation-message">
          Votre inscription a été prise en compte !
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-group">
          <label htmlFor="nom" className="form-label">
            Nom:
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="form-input"
              required
            />
          </label>
        </div>

        <div className="input-group">
          <label htmlFor="prenom" className="form-label">
            Prénom:
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              className="form-input"
              required
            />
          </label>
        </div>

        <div className="input-group">
          <label htmlFor="naissance" className="form-label">
            Date de Naissance:
            <input
              type="date"
              name="naissance"
              value={formData.naissance}
              onChange={handleChange}
              className="form-input"
              required
            />
          </label>
        </div>

        <div className="input-group">
          <label htmlFor="classe" className="form-label">
            Classe:
            <select
              name="classe"
              value={formData.classe}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="">-- Choisir une classe --</option>
              {classes.map((classe, index) => (
                <option key={index} value={classe}>
                  {classe}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button type="submit" className="submit-button">S'inscrire</button>
      </form>
    </div>
  );
};

export default Inscription;
