const display = document.getElementById('display');
const clear = document.getElementById('clear');
const backspace = document.getElementById('backspace');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const equals = document.getElementById('equals');
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

let currentNumber = '';
let operator = '';

clear.addEventListener('click', () => {
    currentNumber = '';
    operator = '';
    display.value = '';
});

backspace.addEventListener('click', () => {
    currentNumber = currentNumber.slice(0, -1);
    display.value = currentNumber;
});

divide.addEventListener('click', () => {
    operator = '/';
    currentNumber += operator;
    display.value = currentNumber;
});

multiply.addEventListener('click', () => {
    operator = '*';
    currentNumber += operator;
    display.value = currentNumber;
});

minus.addEventListener('click', () => {
    operator = '-';
    currentNumber += operator;
    display.value = currentNumber;
});

plus.addEventListener('click', () => {
    operator = '+';
    currentNumber += operator;
    display.value = currentNumber;
});

equals.addEventListener('click', () => {
    let calculation = currentNumber;
    if (operator === '+') {
        calculation = parseFloat(calculation.split('+')[0]) + parseFloat(calculation.split('+')[1]);
    } else if (operator === '-') {
        calculation = parseFloat(calculation.split('-')[0]) - parseFloat(calculation.split('-')[1]);
    } else if (operator === '*') {
        calculation = parseFloat(calculation.split('*')[0]) * parseFloat(calculation.split('*')[1]);
    } else if (operator === '/') {
        calculation = parseFloat(calculation.split('/')[0]) / parseFloat(calculation.split('/')[1]);
    }
    display.value = calculation;
    currentNumber = '';
    operator = '';
});

// Add event listeners for number buttons
zero.addEventListener('click', () => {
    currentNumber += '0';
    display.value = currentNumber;
});

one.addEventListener('click', () => {
    currentNumber += '1';
    display.value = currentNumber;
});

two.addEventListener('click', () => {
    currentNumber += '2';
    display.value = currentNumber;
});

three.addEventListener('click', () => {
    currentNumber += '3';
    display.value = currentNumber;
});

four.addEventListener('click', () => {
    currentNumber += '4';
    display.value = currentNumber;
});

five.addEventListener('click', () => {
    currentNumber += '5';
    display.value = currentNumber;
});

six.addEventListener('click', () => {
    currentNumber += '6';
    display.value = currentNumber;
});

seven.addEventListener('click', () => {
    currentNumber += '7';
    display.value = currentNumber;
});

eight.addEventListener('click', () => {
    currentNumber += '8';
    display.value = currentNumber;
});

nine.addEventListener('click', () => {
    currentNumber += '9';
    display.value = currentNumber;
});