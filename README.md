# Application de Calculatrice

## Description

Ce projet est une simple application de calculatrice construite avec Node.js. L'application inclut des fonctionnalités arithmétiques de base et démontre un pipeline CI/CD utilisant GitHub Actions et Docker.

## Table des Matières

- [Description](#Description)
- [Installation](#Installation)
- [Utilisation](#Utilisation)
- [Tests](#Tests)
- [Docker](#Docker)
- [Pipeline CI/CD](#Pipeline-ci/cd)
- [Contribution](#Contribution)

## Installation

Pour commencer avec ce projet, vous devez avoir Node.js et npm installés sur votre machine.

1. Clonez le dépôt :

    ```bash
    git clone https://github.com/HaniRiguene/pipelinee.git
    cd pipelinee
    ```

2. Installez les dépendances :

    ```bash
    npm install
    ```

## Utilisation

Pour démarrer l'application, exécutez :

```bash
node server.js
```
## Tests

Le projet inclut des tests unitaires pour les fonctions de la calculatrice. Pour exécuter les tests, utilisez la commande suivante :

```bash
npm test
```
## Docker

L'application peut être containerisée en utilisant Docker. Voici les étapes pour construire et exécuter le conteneur Docker.

## Construire l'Image Docker

Pour construire l'image Docker, exécutez :

```bash
docker build -t hani9/pipeline:latest .
```
## Exécuter le Conteneur Docker

Pour exécuter le conteneur Docker, utilisez :

```bash
docker run -p 3000:3000 hani9/pipeline:latest
```
## Pipeline CI/CD
Le projet utilise GitHub Actions pour automatiser le pipeline CI/CD. 
Le pipeline effectue les étapes suivantes :

1. Test : Exécute les tests unitaires pour s'assurer que        l'application fonctionne correctement.
2. Build : Construit une image Docker de l'application.
3. Push : Pousse l'image Docker vers Docker Hub.

## Contribution

Les contributions sont les bienvenues ! Veuillez soumettre une pull request ou ouvrir une issue pour discuter de tout changement.





