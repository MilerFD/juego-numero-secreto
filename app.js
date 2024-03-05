let numeroSecreto, intentos;
let listaNumerosGenerados = [];
let numeroMaximo = 2;

condicionesInciales();

function intentoDeUsuario() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `¡Acertaste el numero secreto en ${intentos} ${intentos === 1 ? "intento" : "intentos"}!`);
        document.querySelector("#intentar").setAttribute("disabled", true);
        document.querySelector("#reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        limpiarCaja();
        intentos++;
    }
}

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosGenerados);
    if (listaNumerosGenerados.length === numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los números posible");
    } else {
        if (listaNumerosGenerados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosGenerados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
    document.querySelector("#valorUsuario").focus();
}

function condicionesInciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reniciarJuego() {
    limpiarCaja();
    condicionesInciales();
    document.querySelector("#reiniciar").setAttribute("disabled", true);
    document.querySelector("#intentar").removeAttribute("disabled");
}