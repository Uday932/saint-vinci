import axios from 'axios';

// URL de base de l'API
const api = axios.create({
  baseURL: 'https://cesarion.vercel.app/api',
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
