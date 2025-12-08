let num1 = Number(prompt("Introduce el primer número:"));
let num2 = Number(prompt("Introduce el segundo número:"));
let operacion = prompt("¿Qué operación quieres hacer? (+, -, *, /)");

let resultado;

if (operacion === "+") {
    resultado = num1 + num2;
} else if (operacion === "-") {
    resultado = num1 - num2;
} else if (operacion === "*") {
    resultado = num1 * num2;
} else if (operacion === "/") {
    if (num2 === 0) {
        alert("Error: no se puede dividir entre 0.");
    } else {
        resultado = num1 / num2;
    }
} else {
    alert("Operación no válida.");
}

if (resultado !== undefined) {
    alert("El resultado es: " + resultado);
}