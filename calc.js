var newLine = true;
var value1;
var currentOperator;

function digitBtnPressed(button) {
if (newLine) {
    document.getElementById("inputbox").value = button;
    newLine = false;
} else {
    var currentValue = document.getElementById("inputbox").value;
    document.getElementById("inputbox").value = currentValue + button;
}
}

function btnCPressed() {
document.getElementById("inputbox").value = 0;
newLine = true;
}

function operatorBtnPressed(operator) {
currentOperator = operator;
value1 = parseFloat(document.getElementById("inputbox").value);
newLine = true;
}

function equalBtnPressed() {
    var value2 = parseFloat(document.getElementById("inputbox").value);
    var finalTotal;

    switch (currentOperator) {
        case "+":
        finalTotal = value1 + value2;
        break;
        case "-":
        finalTotal = value1 - value2;
        break;
        case "/":
        finalTotal = value1 / value2;
        break;
        case "x":
        finalTotal = value1 * value2;
        break;
        case "%":
        finalTotal = value1 % value2;
        break;
    }
    document.getElementById("inputbox").value = finalTotal;
}

function symBolsPressed() {
    var currentValue = document.getElementById("inputbox").value;
    if (!currentValue.includes(".")) {
        document.getElementById("inputbox").value = currentValue + ".";
    }
}

function percentageBtnPressed() {
    var currentValue = parseFloat(document.getElementById("inputbox").value);
    var percentageValue = currentValue / 100;
    document.getElementById("inputbox").value = percentageValue;
}

function squarePressed() {
    var currentValue = parseFloat(document.getElementById("inputbox").value);
    document.getElementById("inputbox").value = currentValue ** 2;
}

function cubePressed() {
    var currentValue = parseFloat(document.getElementById("inputbox").value);
    document.getElementById("inputbox").value = currentValue ** 3;
}

function squareRootPressed() {
    var currentValue = parseFloat(document.getElementById("inputbox").value);
    document.getElementById("inputbox").value = Math.sqrt(currentValue);
}

function cubeRootPressed() {
    var currentValue = parseFloat(document.getElementById("inputbox").value);
    document.getElementById("inputbox").value = Math.cbrt(currentValue);
}

function factorialPressed() {
    var currentValue = parseInt(document.getElementById("inputbox").value);
    var factorial = 1;
    for (var i = 1; i <= currentValue; i++) {
        factorial *= i;
    }
    document.getElementById("inputbox").value = factorial;
}

function sinPressed() {
    var currentValue = parseFloat(document.getElementById("inputbox").value);
    document.getElementById("inputbox").value = Math.sin(currentValue);
}

function cosPressed() {
    var currentValue = parseFloat(document.getElementById("inputbox").value);
    document.getElementById("inputbox").value = Math.cos(currentValue);
}

function tanPressed() {
    var currentValue = parseFloat(document.getElementById("inputbox").value);
    document.getElementById("inputbox").value = Math.tan(currentValue);
}

function sinhPressed() {
var currentValue = parseFloat(document.getElementById("inputbox").value);
document.getElementById("inputbox").value = Math.sinh(currentValue);
}

function coshPressed() {
var currentValue = parseFloat(document.getElementById("inputbox").value);
document.getElementById("inputbox").value = Math.cosh(currentValue);
}

function tanhPressed() {
var currentValue = parseFloat(document.getElementById("inputbox").value);
document.getElementById("inputbox").value = Math.tanh(currentValue);
}

function ePressed() {
    document.getElementById("inputbox").value = Math.E;
}

function piPressed() {
    document.getElementById("inputbox").value = Math.PI;
}

function naturalLogPressed() {
    var currentValue = parseFloat(document.getElementById("inputbox").value);
    document.getElementById("inputbox").value = Math.log(currentValue);
}

function logPressed() {
    var currentValue = parseFloat(document.getElementById("inputbox").value);
    document.getElementById("inputbox").value = Math.log10(currentValue);
}

function inversePressed() {
    var currentValue = parseFloat(document.getElementById("inputbox").value);
    document.getElementById("inputbox").value = 1 / currentValue;
}