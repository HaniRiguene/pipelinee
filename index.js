// index.js

const readline = require('readline');
const { add, subtract, multiply, divide } = require('./calculator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
        rl.question('Enter the operation (+, -, *, /): ', (operation) => {
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
                        console.log('Invalid operation');
                        rl.close();
                        return;
                }

                console.log(`The result is: ${result}`);
            } catch (error) {
                console.log(`Error: ${error.message}`);
            }

            rl.close();
        });
    });
});
