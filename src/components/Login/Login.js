import React, { useState } from 'react';
import '../Login/Login.css';


const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  // Gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  // Soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username === 'directeur' && credentials.password === 'ecole123') {
      alert('Connexion réussie');
    } else {
      setErrorMessage('Identifiant ou mot de passe incorrect');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Connexion Directeur</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="form-group">
          <label htmlFor="username">Identifiant</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Entrez votre identifiant"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Entrez votre mot de passe"
            required
          />
        </div>
        <button type="submit" className="login-button">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;