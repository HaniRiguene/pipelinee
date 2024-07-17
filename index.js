// index.js

const express = require('express');
const app = express();
const { add, subtract, multiply, divide } = require('./calculator');

// Middleware pour parser les données POST
app.use(express.urlencoded({ extended: true }));

// Route pour servir l'interface web
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route pour gérer les calculs depuis l'interface web
app.post('/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    let result;
    try {
        switch (operation) {
            case '+':
                result = add(a, b);
                break;
            case '-':
                result = subtract(a, b);
                break;
            case '*':
                result = multiply(a, b);
                break;
            case '/':
                result = divide(a, b);
                break;
            default:
                throw new Error('Invalid operation');
        }

        res.send(`The result is: ${result}`);
    } catch (error) {
        res.status(400).send(`Error: ${error.message}`);
    }
});

// Démarrer le serveur sur le port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
