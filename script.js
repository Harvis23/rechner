let previousValue = '';
let currentValue = '';
let operator = null;

let currentDisplay  = '0';
let resultDisplay = false;

document.addEventListener("DOMContentLoaded", function() 
{

    let botones = document.querySelector(".button-container")
    let clear = document.querySelector(".clear")
    let decimal = document.querySelector(".decimal")
    let equal = document.querySelector(".equal")

    let operators = document.querySelectorAll(".operator")
    let numeros = document.querySelectorAll(".operand")
    
    document.addEventListener("keydown", handleKeyboard)

    numeros.forEach((numero => {
        numero.addEventListener("click", event => {
            handleNumber(event.target.textContent)
            display(currentValue)
        })
    }))

    operators.forEach((op => {
        op.addEventListener("click", event => {
            handleOperation(event.target.textContent)
        })
    }))

    equal.addEventListener("click", () => {
        handleEqual();
    })


    clear.addEventListener("click", () => {
        previousValue = "";
        currentValue = "";
        currentDisplay = "0";
        display(currentDisplay)
        console.log("You pressed clear button")
    })

    decimal.addEventListener("click", ()=> {
        addDecimal();
    })

    function handleNumber(num){
    if (currentValue.length <= 5){
        currentValue += num;
        currentDisplay = currentValue;
        display(currentDisplay);
    }
    }

    function handleOperation(op)
    {
        if (operator !== null && previousValue !== '' && currentValue !== '')
        {
            const result = operate(previousValue, currentValue, operator);
            roundNumber(result);
            display(result);
            previousValue = result;
            currentValue = '';
            operator = op
            resultDisplay = true;
        } 
        else if (resultDisplay === true && previousValue !== '')
        {
            operator = op;
            currentDisplay = '';
        }
        else
        {
            operator = op;
            previousValue = currentValue;
            currentDisplay = '';
            currentValue = '';
        }
    }

    function handleEqual()
    {
        if (operator !== null && previousValue !== '' && currentValue !== ''){
            const result = operate(previousValue, currentValue, operator);
            const finalResult = Math.round(result * 1000) / 1000
            display(finalResult);
            previousValue = finalResult;
            currentValue = '';
            operator = null
            resultDisplay = true
        }
    }

    function display(value)
    {
        if (currentDisplay === "0" || resultDisplay) {
            currentDisplay = value;
        } else {
            currentDisplay = value;
        }
        resultDisplay = false;
        updateDisplay();
    }

    function updateDisplay()
    {
        let pantalla = document.querySelector(".screen");
        pantalla.textContent = currentDisplay

    }

    function operate(previousValue, currentValue, operator)
    {
        previousValue = Number(previousValue);
        currentValue = Number(currentValue);
        switch (operator){
            case '+':
                return addition(previousValue, currentValue);
            case '-':
                return substraction(previousValue, currentValue);
            case '*':
                return multiplication(previousValue, currentValue);
            case '/':
                return division(previousValue, currentValue);
            default:
                return 'Error';
                
        }
    }

    function addition(previousValue, currentValue)
    {
        return previousValue + currentValue;
    }

    function multiplication(previousValue, currentValue)
    {
        return previousValue * currentValue;
    }

    function substraction(previousValue, currentValue)
    {
        return previousValue - currentValue;
    }

    function division(previousValue, currentValue)
    {
        if (currentValue === 0){
            return 'Error'
        }
        else {
            return previousValue / currentValue;
        }
    }

    function addDecimal()
    {
        if (!currentValue.includes(".")){
            currentValue += "."
        }
    }

    function handleKeyboard(event)
    {
        const key = event.key;
        if (key >= '0' && key <= '9'){
            handleNumber(key);
        }
        else if (key === '+' || key === '-' || key === '*' || key === '/'){
            handleOperation(key)
        }
        else if (key === '=' || key === 'Enter'){
            handleEqual();
        }
        else if (key === 'Backspace'){
            clearScreen();
        }
    }
});