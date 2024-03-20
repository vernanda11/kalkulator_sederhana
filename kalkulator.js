const calculator = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
    modulo: (x, y) => x % y
};

function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    let result;

    switch (operator) {
        case "add":
            result = calculator.add(num1, num2);
            break;
        case "subtract":
            result = calculator.subtract(num1, num2);
            break;
        case "multiply":
            result = calculator.multiply(num1, num2);
            break;
        case "divide":
            result = calculator.divide(num1, num2);
            break;
        case "modulo":
            result = calculator.modulo(num1, num2);
            break;
        default:
            result = "Invalid operator";
    }

    document.getElementById("result").textContent = `Result: ${result}`;
}
