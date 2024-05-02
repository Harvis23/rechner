const botones = document.querySelector(".button-container")
let num1 = '';
let num2 = '';
let operator = '';

const pantalla = document.querySelector(".screen")
const clear = document.querySelector(".delete")
const equal = document.querySelector(".equal")
const decimal = document.querySelector(".decimal")
let currentValue = '';

let operators = document.querySelectorAll(".operator")

botones.addEventListener("click", event => {
    if (event.target.matches('button')){
        const key = event.target 
        const action = key.dataset.action
        const keyContent = event.target.textContent
        const displayedNum = pantalla.textContent //current displayed number

        if (!action)
        {
            if (displayedNum === '0')
            {
                pantalla.textContent = keyContent
            }
            else
            {
                pantalla.textContent += keyContent
            }
        }
        else if (action === 'decimal')
        {
            pantalla.textContent += keyContent
        }
        else if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') 
        {
            
        }
        
        
    }

})


