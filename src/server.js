// Exemple d'un fichier server.js ou app.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le corps des requêtes JSON
app.use(bodyParser.json());

// Route pour ajouter une nouvelle classe
app.post('/api/classes', (req, res) => {
  const { classerang, classenom, professeurId } = req.body;

  // Validation des données
  if (!classerang || !classenom || !professeurId) {
    return res.status(400).json({ message: 'Tous les champs sont requis.' });
  }

  // Logique pour ajouter la classe à la base de données
  try {
    const newClass = { classerang, classenom, professeurId };
    // Ajoutez la classe à votre base de données ici
    // Par exemple : await db.classes.insert(newClass);

    res.status(201).json(newClass); // Répondre avec la classe ajoutée
  } catch (error) {
    console.error('Erreur lors de l\'ajout de la classe:', error);
    res.status(500).json({ message: 'Erreur interne du serveur.' });
  }
});

// Autres routes et configurations...

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});