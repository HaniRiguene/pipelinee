// Fonction pour ajouter du texte au champ d'affichage
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Fonction pour effacer le champ d'affichage
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Fonction pour calculer l'expression et l'afficher dans le champ d'affichage
function calculate() {
    try {
        const displayValue = document.getElementById('display').value;
        const result = eval(displayValue); // Utilisation de eval pour simplifier l'exemple (attention aux risques de sécurité)
        document.getElementById('display').value = result;
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while calculating. Please try again.');
    }
}
