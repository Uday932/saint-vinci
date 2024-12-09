import React, { useState } from 'react';
import './App.css'; 

const Inscription = () => {
  // On crée un état pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    age: '',
    classe: '',
  });

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
    <div>
      <h2>Inscription des élèves</h2>
      {isSubmitted && (
        <div className="confirmation-message">
          Votre inscription a été prise en compte !
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nom:
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Prenom:
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Âge:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Classe:
            <input
              type="text"
              name="classe"
              value={formData.classe}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Inscription;
