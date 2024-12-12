import axios from 'axios';

// URL de base de l'API
const api = axios.create({
  baseURL: 'https://cesarion.vercel.app/api',
});

// Se connecter à l'API
export const login = async (loginData) => {
  try {
    const response = await api.post('/connexion', loginData);
    return response.data; // Retourne le token de connexion
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    throw error;
  }
};

// Récupérer les informations de l'utilisateur connecté
export const getUserInfo = async (userId) => {
  try {
    const response = await api.get(`/utilisateurs/${userId}`);
    return response.data; // Retourne les informations de l'utilisateur
  } catch (error) {
    console.error('Erreur lors de la récupération des informations de l\'utilisateur:', error);
    throw error;
  }
};

// Exemple d'utilisation
const loginData = {
  login: 'elias',
  password: 'azerty',
};

login(loginData)
  .then((token) => {
    console.log('Token de connexion:', token);
    // Récupérer les informations de l'utilisateur connecté
    getUserInfo(1) // Remplacez 1 par l'ID de l'utilisateur que vous souhaitez récupérer
      .then((userInfo) => {
        console.log('Informations de l\'utilisateur:', userInfo);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des informations de l\'utilisateur:', error);
      });
  })
  .catch((error) => {
    console.error('Erreur lors de la connexion:', error);
  });
  

// Récupérer la liste des classes
export const getClasses = async () => {
  try {
    const response = await api.get('/classes');
    return response.data; // Retourne la liste des classes
  } catch (error) {
    console.error('Erreur lors de la récupération des classes:', error);
    throw error;
  }
};

// Récupérer une classe spécifique avec ses élèves
export const getClasseById = async (classeId) => {
  try {
    const response = await api.get(`/classes/${classeId}`);
    return response.data; // Retourne les informations de la classe
  } catch (error) {
    console.error(`Erreur lors de la récupération de la classe ${classeId}:`, error);
    throw error;
  }
};

// Ajouter une nouvelle classe
export const createClasse = async (classeData) => {
  try {
    const response = await api.post('/classes', classeData);
    return response.data; // Retourne la nouvelle classe créée
  } catch (error) {
    console.error('Erreur lors de la création de la classe:', error);
    throw error;
  }
};
