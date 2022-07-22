let displayData = "";

let displayVariable;
let newVariable;

const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
    return a-b;	
};

const multiply = function(a, b) {  
    return a * b;
};

const divide = function (a, b) {
    return a / b;
}

const operate = function (operator, a, b) {
    if(operator === "+"){
        return add(a, b);

    } else if (operator === "-") {
        return subtract(a, b);

    } else if (operator === "*") {
        return multiply(a, b);

    } else if (operator === "/"){
        return divide(a, b);
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
        populateDisplay(numberButton.id);
    })
})

const clearButton = document.querySelector("#clear");
clearButton.addEventListener('click', () => {
    displayData = "";
    populateDisplay('');
})
