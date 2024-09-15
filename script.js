let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    if (currentInput.length < 16) { 
        if (currentInput === '0' && number === '0') return;
        if (currentInput === '0' && number !== '.') currentInput = '';
        currentInput += number;
        display.innerText = currentInput;
    }
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (operator !== '') calculate();
    previousInput = currentInput;
    currentInput = '';
    operator = op;
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}

function calculate() {
    if (currentInput === '' || previousInput === '') return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current === 0 ? 'Error' : prev / current;
            break;
        default:
            return;
    }
    
    currentInput = result.toString().slice(0, 16); 
    display.innerText = currentInput;
    operator = '';
    previousInput = '';
}