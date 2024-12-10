import React, { useState } from "react";

const ClassRepartition = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const students = [
    { id: 1, name: "Alice", class: "CP" },
    { id: 2, name: "Bob", class: "CP" },
    { id: 3, name: "Charlie", class: "CE1" },
    { id: 4, name: "David", class: "CE1" },
    { id: 5, name: "Eve", class: "CE2" },
    { id: 6, name: "Frank", class: "CE2" },
    { id: 7, name: "Grace", class: "CM1" },
    { id: 8, name: "Caroline", class: "CM1" },
    { id: 9, name: "Elise", class: "CM1" },
    { id: 10, name: "Marie", class: "CM2" },
    { id: 11, name: "Pauline", class: "CM2" },


  ];

  const filterStudentsByClass = (className) => {
    return students.filter((student) => student.class === className);
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Répartition des élèves par classe</h1>

      <div className="mb-6">
        <label className="block font-semibold mb-2">Sélectionner une classe :</label>
        <select
          className="w-full p-2 border rounded-md"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="">-- Choisir une classe --</option>
          <option value="CP">CP</option>
          <option value="CE1">CE1</option>
          <option value="CE2">CE2</option>
          <option value="CM1">CM1</option>
          <option value="CM2">CM2</option>

        </select>
      </div>

      {selectedClass && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Liste des élèves en {selectedClass}</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border p-2">ID</th>
                <th className="border p-2">Nom</th>
              </tr>
            </thead>
            <tbody>
              {filterStudentsByClass(selectedClass).map((student) => (
                <tr key={student.id} className="even:bg-gray-100">
                  <td className="border p-2">{student.id}</td>
                  <td className="border p-2">{student.name}</td>
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
