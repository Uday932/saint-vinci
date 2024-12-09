import React, { useState } from "react";
import "./App.css";

const ClassAssignment = () => {
    const [selectedClass, setSelectedClass] = useState(""); // Classe sélectionnée
    const [students] = useState([
        { id: 1, name: "Alice", class: "6ème" },
        { id: 2, name: "Bob", class: "6ème" },
        { id: 3, name: "Charlie", class: "5ème" },
        { id: 4, name: "David", class: "5ème" },
        { id: 5, name: "Eve", class: "4ème" },
        { id: 6, name: "Frank", class: "4ème" },
        { id: 7, name: "Grace", class: "3ème" },
    ]);

    // Filtrer les élèves par classe
    const filterStudentsByClass = (className) => {
        return students.filter((student) => student.class === className);
    };

    return (
        <div className="container">
            <h1>Répartition des élèves par classe</h1>

            {/* Sélecteur de classe */}
            <div>
                <label htmlFor="class-selector">Sélectionner une classe :</label>
                <select
                    id="class-selector"
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                >
                    <option value="">-- Choisir une classe --</option>
                    <option value="6ème">6ème</option>
                    <option value="5ème">5ème</option>
                    <option value="4ème">4ème</option>
                    <option value="3ème">3ème</option>
                </select>
            </div>

            {/* Affichage des élèves par classe */}
            {selectedClass && (
                <div className="class-container">
                    <h2>Liste des élèves en {selectedClass}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nom</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterStudentsByClass(selectedClass).map((student) => (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ClassAssignment;
