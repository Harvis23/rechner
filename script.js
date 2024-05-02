const botones = document.querySelector(".button-container")
const pantalla = document.querySelector(".screen")
const clear = document.querySelector(".delete")
const equal = document.querySelector(".equal")

botones.addEventListener("click", event => {
    if (event.target.matches('button')){
        const key = event.target 
        const action = key.dataset.action
        const keyContent = key.textContent
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

function operate(num1, num2, operator) {

}