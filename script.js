let previousValue = '';
let currentValue = '';
let operator = '';
let currentDisplay = '0';
let resultDisplay = false;

let botones = document.querySelector(".button-container")
let pantalla = document.querySelector(".screen")
let clear = document.querySelector(".delete")
let equal = document.querySelector(".equal")
let decimal = document.querySelector(".decimal")

let operators = document.querySelectorAll(".operator")
let numeros = document.querySelectorAll(".operand")



numeros.forEach((numero => {
    numero.addEventListener("click", event => {
        handleNumber(event.target.textContent)
        display(currentValue);
        
    })
}))

operators.forEach((operator => {
    operator.addEventListener("click", event => {
        handleOperation(event.target.textContent)
    })
}))

function handleNumber(num){
    if (currentValue.length <= 5){
        currentValue += num
    }
}

function handleOperation(op){
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function display(value){
    if (currentDisplay === "0" || resultDisplay === false) {
        currentDisplay = value;
    } else {
        currentDisplay += value;
    }
    resultDisplay = false; // Flag to track wether the result was displayed

    updateDisplay();
}

function updateDisplay() {
    pantalla.textContent = currentDisplay;
}
