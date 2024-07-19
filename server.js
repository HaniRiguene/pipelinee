const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Définition du répertoire des fichiers statiques
app.use(express.static(path.join(__dirname)));

// Route pour servir index.html comme page d'accueil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur web démarré sur http://localhost:${port}`);
});
