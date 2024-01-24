let currentInput = '';
let displayExpression = '';

function appendNumber(number) {
    currentInput += number;
    displayExpression += number;
    updateDisplay();
}

function appendOperator(operator) {
    currentInput += operator;
    displayExpression += operator;
    updateDisplay();
}

function calculateResult() {
    if (currentInput !== '') {
        try {
            let result = eval(currentInput);
            currentInput = result.toString();
            displayExpression = result.toString();
            updateDisplay();
        } catch (error) {
            currentInput = '';
            displayExpression = 'Error';
            updateDisplay();
        }
    }
}

function clearDisplay() {
    currentInput = '';
    displayExpression = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayExpression;
}
