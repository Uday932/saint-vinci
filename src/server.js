const express = require('express');
const cors = require('cors');
const app = express();

// Configure CORS
app.use(cors({
  origin: 'http://localhost:3000', // Autorise uniquement ton frontend
  credentials: true,  // Nécessaire si tu utilises des cookies ou des sessions
}));

// Exemple de route
app.post('/api/connexion', (req, res) => {
  res.json({ message: 'Connexion réussie' });
});

app.listen(5000, () => {
  console.log('Serveur démarré sur http://localhost:5000');
});
