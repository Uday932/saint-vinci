import React, { useState, useEffect } from "react";
import './ClassRepartition.css';

const ClassRepartition = () => {
  const [selectedClass, setSelectedClass] = useState("");  // Classe sélectionnée
  const [classes, setClasses] = useState([]);  // Liste des classes
  const [students, setStudents] = useState([]);  // Liste des élèves
  const [loading, setLoading] = useState(true);  // Chargement des données
  const [newClass, setNewClass] = useState({ classerang: '', classenom: '', professeurId: 1 }); // État pour la nouvelle classe

  // Effectuer l'appel API pour récupérer les classes
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch('/api/classes'); // Récupérer la liste des classes
        const data = await response.json();
        setClasses(data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des classes', error);
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  // Fonction pour récupérer les élèves de la classe sélectionnée
  useEffect(() => {
    const fetchStudents = async () => {
      if (selectedClass) {
        try {
          const response = await fetch(`/api/classes/${selectedClass}`); // Récupérer la classe spécifique
          const data = await response.json();
          setStudents(data.eleves); // Assurez-vous que 'eleves' est la bonne propriété
        } catch (error) {
          console.error('Erreur lors de la récupération des élèves', error);
        }
      } else {
        setStudents([]); // Réinitialiser la liste des élèves si aucune classe n'est sélectionnée
      }
    };

    fetchStudents();
  }, [selectedClass]);

  // Fonction pour ajouter une nouvelle classe
  const handleAddClass = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    console.log('Données de la nouvelle classe:', newClass); // Ajoutez ceci pour voir les données envoyées
    try {
      const response = await fetch('/api/classes', {
        method: 'POST', // Méthode HTTP
        headers: {
          'Content-Type': 'application/json', // Indique que le corps de la requête est en JSON
        },
        body: JSON.stringify(newClass), // Convertit l'objet newClass en chaîne JSON
      });

      if (response.ok) {
        const addedClass = await response.json(); // Récupère la réponse JSON
        console.log('Classe ajoutée:', addedClass); // Ajoutez ceci pour voir la réponse
        setClasses([...classes, addedClass]); // Ajoute la nouvelle classe à l'état
        setNewClass({ classerang: '', classenom: '', professeurId: 1 }); // Réinitialise le formulaire
      } else {
        console.error('Erreur lors de l\'ajout de la classe', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la classe', error);
    }
  };

  return (
    <div className="class-repartition-container">
      <h1 className="class-repartition-title">Répartition des élèves par classe</h1>

      {/* Sélecteur de classe existant */}
      <div className="select-class-container">
        <label className="select-class-label">Sélectionner une classe :</label>
        <select
          className="select-class-dropdown"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="">-- Choisir une classe --</option>
          {loading ? (
            <option>Chargement des classes...</option>
          ) : (
            classes.length > 0 ? (
              classes.map((classe) => (
                <option key={classe.id} value={classe.id}>
                  {classe.classerang}
                </option>
              ))
            ) : (
              <option>Aucune classe disponible</option>
            )
          )}
        </select>
      </div>

      {/* Affichage des élèves */}
      {students.length > 0 && (
        <div className="student-list-container">
          <h2 className="student-list-title">Élèves dans la classe {selectedClass} :</h2>
          <table className="student-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Date de Naissance</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.lastname}</td>
                  <td>{new Date(student.datenaissance).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Formulaire pour ajouter une nouvelle classe */}
      
    </div>
  );
};

export default ClassRepartition;  