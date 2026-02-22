function cambiarTexto() {
    const texto = document.getElementById("texto");
    texto.textContent = "Texto cambiado";
}

function cambiarColor() {
    const caja = document.getElementById("caja");
    caja.style.backgroundColor = "lightblue";
}

function crearParrafo() {
    const caja = document.getElementById("caja");
    const nuevo = document.createElement("p");
    nuevo.textContent = "Nuevo párrafo añadido";
    caja.appendChild(nuevo);
}

function borrarParrafo() {
    const caja = document.getElementById("caja");
    const parrafos = caja.getElementsByTagName("p");

    if (parrafos.length > 1) {
        caja.removeChild(parrafos[parrafos.length - 1]);
    }
}
