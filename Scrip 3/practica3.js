function generarNumero() {
    let numero = Math.floor(Math.random() * 100) + 1;
    alert("Tu número aleatorio es: " + numero);
}

generarNumero();

let otro = prompt("¿Quieres otro número? (s/n)");
while (otro === "s") {
    generarNumero();
    otro = prompt("¿Quieres otro número? (s/n)");
}