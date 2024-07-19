# Utiliser une image de node.js comme base
FROM node:latest

# Créer le répertoire de l'application dans l'image
WORKDIR /app

# Copier les fichiers nécessaires à l'intérieur de l'image
COPY package.json /app/
COPY server.js /app/
COPY index.html /app/
COPY calculator.js /app/

# Installer les dépendances
RUN npm install express
RUN node server.js

# Exposer le port 3000
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "server.js"]
