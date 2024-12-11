import React, { useState, useEffect } from "react";
import './ClassRepartition.css';

const ClassRepartition = () => {
  const [selectedClass, setSelectedClass] = useState("");  // Classe sélectionnée
  const [classes, setClasses] = useState([]);  // Liste des classes
  const [students, setStudents] = useState([]);  // Liste des élèves
  const [loading, setLoading] = useState(true);  // Chargement des données

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

  return (
    <div className="class-repartition-container">
      <h1 className="class-repartition-title">Répartition des élèves par classe</h1>

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

      {students.length > 0 && (
        <div className="student-list-container">
          <h2 className="student-list-title">Élèves dans la classe {selectedClass} :</h2>
          <table className="student-table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Date de Naissance</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.lastname}</td>
                  <td>{new Date(student.datenaissance).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ClassRepartition;