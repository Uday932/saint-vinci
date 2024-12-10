import React, { useState } from "react";

const Inscription = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    age: "",
    classe: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Élève inscrit :", formData);
    setIsSubmitted(true);
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Inscription des élèves</h2>
      {isSubmitted && (
        <div className="p-4 mb-4 bg-green-200 text-green-800 rounded-md">
          Votre inscription a été prise en compte !
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        {["nom", "prenom", "age", "classe"].map((field) => (
          <div key={field}>
            <label className="block font-semibold capitalize">
              {field}:
            </label>
            <input
              type={field === "age" ? "number" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
        ))}
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default Inscription;
