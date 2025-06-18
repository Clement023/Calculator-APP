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

function advancedOperations(operation) {
    var currentValue = parseFloat(document.getElementById("inputbox").value);
    var result;

    switch (operation) {
        case "decimal":
            if (!document.getElementById("inputbox").value.includes(".")) {
                document.getElementById("inputbox").value += ".";
            }
            return;
        case "percentage":
            result = currentValue / 100;
            break;
        case "square":
            result = currentValue ** 2;
            break;
        case "cube":
            result = currentValue ** 3;
            break;
        case "squareRoot":
            result = Math.sqrt(currentValue);
            break;
        case "cubeRoot":
            result = Math.cbrt(currentValue);
            break;
        case "factorial":
            result = 1;
            for (var i = 1; i <= currentValue; i++) {
                result *= i;
            }
            break;
        case "sin":
            result = Math.sin(currentValue);
            break;
        case "cos":
            result = Math.cos(currentValue);
            break;
        case "tan":
            result = Math.tan(currentValue);
            break;
        case "sinh":
            result = Math.sinh(currentValue);
            break;
        case "cosh":
            result = Math.cosh(currentValue);
            break;
        case "tanh":
            result = Math.tanh(currentValue);
            break;
        case "e":
            result = Math.E;
            break;
        case "pi":
            result = Math.PI;
            break;
        case "naturalLog":
            result = Math.log(currentValue);
            break;
        case "log":
            result = Math.log10(currentValue);
            break;
        case "inverse":
            result = 1 / currentValue;
            break;
        default:
            console.error("Invalid operation");
            return;
    }

    document.getElementById("inputbox").value = result;
}
