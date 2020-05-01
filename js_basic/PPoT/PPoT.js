//Variables globales
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var button = document.getElementById("boton");
var election;
var seleccionado;
var piedra, papel, tijeras;
var winner = document.getElementById("resultado");
var counting = document.getElementById("contador");
var jugando = 0;
var stats = {
    w : "ganador",
    t : "empate",
    l : "perderdor"
}
//event-listener
boton.addEventListener("click", juego);
//funciones
function aleatorio(max, min)
{
    var resultado;
    resultado = Math.floor(Math.random()*(max - min + 1)) + min;
    return resultado;
}

function juego() {
    var pc_election;
    pc_election = aleatorio(3, 1);
    if (rock.checked){
        election = 1;
    } else if (paper.checked) {
        election = 2;
    } else {
        election = 3;
    }
    
    if(election == pc_election) {
        winner.innerHTML = "Hubo un empate";
    } else if (election == 1) {
        if (pc_election == 2) {
            winner.innerHTML = "Perdiste el pc eligio papel";
        } else {
            winner.innerHTML = "Ganaste el pc eligio tijeras";
        }
    } else if (election == 2) {
        if (pc_election == 1) {
            winner.innerHTML = "Ganaste el pc eligio piedra";
        } else {
            winner.innerHTML = "Perdiste el pc eligio tijeras";
        }
    } else {
        if (election == 3) {
            winner.innerHTML = "Perdiste el pc eligio piedra";
        } else {
            winner.innerHTML = "Ganaste el pc eligio papel";
        }
    }
}