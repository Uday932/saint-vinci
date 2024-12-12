import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ handleLogin }) {
  const [credentials, setCredentials] = useState({ login: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/connexion", credentials, {
        withCredentials: true,
      });

      console.log(response.data);
      handleLogin(response.data.role);  // Mise à jour du statut de connexion
      navigate("/");  // Redirection après la connexion
    } catch (error) {
      console.error("Erreur de connexion:", error);
      setErrorMessage(
        error.response?.data?.message || "Identifiants incorrects"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 shadow-md rounded">
      <h2 className="text-2xl font-semibold mb-6">Connexion</h2>

      {errorMessage && (
        <p className="text-red-600 mb-4">{errorMessage}</p>
      )}

      <div className="mb-4">
        <label className="block text-gray-700">Nom d'utilisateur</label>
        <input
          type="text"
          name="login"
          value={credentials.login}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Mot de passe</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Se connecter
      </button>
    </form>
  );
}

export default Login;
