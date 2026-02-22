function encender() {
    const maquina = document.getElementById("maquina");
    const titulo = document.getElementById("titulo");
    const mensaje = document.getElementById("mensaje");

    maquina.style.backgroundColor = "green";
    titulo.textContent = "Máquina encendida";
    mensaje.textContent = "La máquina está funcionando";
}

function apagar() {
    const maquina = document.getElementById("maquina");
    const titulo = document.getElementById("titulo");
    const mensaje = document.getElementById("mensaje");

    maquina.style.backgroundColor = "red";
    titulo.textContent = "Máquina apagada";
    mensaje.textContent = "La máquina está detenida";
}

function crearMensaje() {
    const maquina = document.getElementById("maquina");
    const nuevo = document.createElement("p");

    nuevo.textContent = "Mensaje extra";
    maquina.appendChild(nuevo);
}

function borrarMensaje() {
    const maquina = document.getElementById("maquina");
    const parrafos = maquina.getElementsByTagName("p");

    if (parrafos.length > 1) {
        maquina.removeChild(parrafos[parrafos.length - 1]);
    }
}
