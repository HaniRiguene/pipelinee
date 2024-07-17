# Utilisation de l'image officielle Node.js 16
FROM node:16

# Définition du répertoire de travail dans l'image Docker
WORKDIR /app

# Copie du package.json et du package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installation des dépendances Node.js
RUN npm install

# Copie du reste des fichiers de l'application dans le répertoire de travail
COPY . .

# Commande par défaut pour démarrer l'application (à adapter selon votre application)
CMD [ "npm", "start" ]
