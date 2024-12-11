import React, { useState } from "react";
import "../ClotureAnnee/ClotureAnnee.css";

function ClotureAnnee() {
  const [eleves, setEleves] = useState([
    { id: 1, nom: "Dupont", prenom: "Jean", classe: "CM1", redouble: false },
    { id: 2, nom: "Durand", prenom: "Claire", classe: "CM2", redouble: true },
    { id: 3, nom: "Martin", prenom: "Lucie", classe: "CM2", redouble: false },
  ]);

  const [historique, setHistorique] = useState([
    {
      annee: "2022-2023",
      eleves: [
        { nom: "Moreau", prenom: "Alice", classe: "CM1", redoublant: false },
        { nom: "Lemoine", prenom: "Paul", classe: "CM2", redoublant: true },
      ],
    },
    {
      annee: "2021-2022",
      eleves: [
        { nom: "Bernard", prenom: "Camille", classe: "CM1", redoublant: false },
        { nom: "Dubois", prenom: "Marc", classe: "CM2", redoublant: true },
      ],
    },
  ]);

  // Fonction pour clôturer l'année
  const cloturerAnnee = () => {
    const nouvelleAnnee = {
      annee: "2023-2024",
      eleves: [...eleves],
    };
    setHistorique([nouvelleAnnee, ...historique]);
    setEleves([]); // Réinitialiser les élèves pour la nouvelle année
    alert("Clôture de l'année effectuée !");
  };

  return (
    <div className="container">
      <h1 className="title">Clôture de l'année scolaire</h1>

      <div className="sections">
        {/* Section principale */}
        <div className="section">
          <h2>Gestion des élèves</h2>
        <table className="w-full table-auto border-collapse rounded-lg overflow-hidden shadow-lg">
            <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="px-4 py-2">
                        Nom
                    </th>
                    <th className="px-4 py-2">
                        Classe
                    </th>
                    <th className="px-4 py-2">
                        Redoublant
                    </th>
                    <th className="px-4 py-2">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white text-gray-800">
                {eleves.map((eleve) =>
                (
                <tr key={eleve.id} className="hover:bg-gray-100">
                    <td className="border px-4 py-2">
                        {eleve.nom} {eleve.prenom}
                    </td>
                    <td className="border px-4 py-2">
                        {eleve.classe}
                    </td>
                    <td className="border px-4 py-2">
                        <span className={`tag ${eleve.redouble ? "bg-red-500" : "bg-green-500"} text-white px-2 py-1 rounded-full`}>{eleve.redouble ? "Oui" : "Non"}</span>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>


        </div>

        {/* Section historique */}
        <div className="section">
          <h2>Historique des années clôturées</h2>
          {historique.length === 0 ? (
            <p>Aucune année clôturée pour l'instant.</p>
          ) : (
            historique.map((entry, index) => (
              <div key={index} className="historique-item">
                <h3>{entry.annee}</h3>
                <table className="styled-table">
                  <thead>
                    <tr>
                      <th>Nom</th>
                      <th>Classe</th>
                      <th>Redoublant</th>
                    </tr>
                  </thead>
                  <tbody>
                    {entry.eleves.map((eleve, i) => (
                      <tr key={i}>
                        <td>{eleve.nom} {eleve.prenom}</td>
                        <td>{eleve.classe}</td>
                        <td>
                          {eleve.redoublant ? (
                            <span className="tag red">Oui</span>
                          ) : (
                            <span className="tag green">Non</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))
          )}
        </div>
      </div>

      <button className="btn-primary" onClick={cloturerAnnee}>
        Clôturer l'année et Créer la nouvelle
      </button>
    </div>
  );
}

export default ClotureAnnee;