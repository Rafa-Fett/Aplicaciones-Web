let usuario = prompt("Introduce tu nombre de usuario:");

if (usuario === "admin") {
    let intentos = 3;
    while (intentos > 0) {
        let password = prompt("Introduce la contraseña:");
        if (password === "1234") {
            alert("Acceso concedido");
            break;
        } else {
            intentos--;
            if (intentos > 0) {
                alert("Contraseña incorrecta. Te quedan " + intentos + " intentos.");
            } else {
                alert("El usuario queda bloqueado. Contacte con el administrador del sitio.");
            }
        }
    }
} else {
    alert("Usuario incorrecto.");
}