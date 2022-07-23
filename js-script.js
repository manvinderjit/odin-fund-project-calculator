let displayData = "0";
let operatorChosen = null;
let firstNumber = null;
let operationExecuted = false;

const add = function(a, b) {
	return Math.round((a+b) * 10000) / 10000;
};

const subtract = function(a, b) {
    return Math.round((a-b) * 10000) / 10000;	
};

const multiply = function(a, b) {  
    return Math.round((a*b) * 10000) / 10000;
};

const divide = function (a, b) {
    return Math.round((a/b) * 10000) / 10000;
}

const operate = function (operator, a, b) {
    if(operator === "+"){
        return add(Number(a), Number(b));

    } else if (operator === "-") {
        return subtract(Number(a), Number(b));

    } else if (operator === "*") {
        return multiply(Number(a), Number(b));

    } else if (operator === "/"){           
        if(Number(b) == 0){                       
            return null
        }
        return divide(Number(a), Number(b));
    } else{
        return null;
    }
}

const divDisplay = document.querySelector("#calc-display");

const populateDisplay = function (newDisplayData) {
    if(displayData.length>15){
        alert("Maximum Calculation Limit Exceeded")
        return;
    }    
    displayData += newDisplayData;    
    divDisplay.innerHTML = displayData;    
}

const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', () => {    
        if(displayData === "0"){
            displayData = "";
        }        
        if(operatorChosen === "/" && numberButton.id === "0"){
            alert("Can not divide by zero!");
            return
        }
        if(operationExecuted === true){
            displayData = "";
            operationExecuted = false;
        }
        populateDisplay(numberButton.id);           
    })
})

const clearButton = document.querySelector("#clear");
clearButton.addEventListener('click', () => {
    clearEverything();
})

const clearEverything = function (){
    displayData = "0";
    populateDisplay('');
    firstNumber = null;    
    operatorChosen = null;
}

window.onload = function () {
    clearEverything();
}

const operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {        
        if(firstNumber === null){
            firstNumber = displayData;
        }
       
        if(operatorChosen !== null && displayData !== ""){            
            let temp = operate(operatorChosen, firstNumber, displayData);
            displayData = temp;
            populateDisplay('');
            firstNumber = displayData;
        }
        operatorChosen = (operatorButton.id);
        displayData = "";       
            
    })
})

const executionButton = document.querySelector("#equal-to");
executionButton.addEventListener('click' , () => {        
    if(firstNumber === null || displayData == ""){
        return
    }
    let temp = operate(operatorChosen, firstNumber, displayData);
    operatorChosen = null;
    operationExecuted = true;
    if(temp === null){
        alert("Can't divide by zero!");
        clearEverything();
        return
    } else{
        displayData = temp
        firstNumber = null;
        populateDisplay('');        
    }
    
})