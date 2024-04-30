let a = document.querySelector(".operand");
let b = document.querySelector(".operand");
let operator = document.querySelector(".operator");


function addition(a, b) {
    display.textContent = a + b
    
    
    

}

function display() {
    var display = document.querySelector(".screen")
    operandBtn.addEventListener('click', function(){
        display.textContent = operandBtn.value;
    })
}



function operate() {
    

}