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
    } else if(scissors.checked){
        election = 3;
    }

    switch (election) {
        case pc_election:
            winner.innerHTML = "Hubo un empate";
            break;
        case 1:
            switch (pc_election) {
                case 2:
                    winner.innerHTML = "Perdiste el pc eligio papel";
                    break;
                case 3:
                    winner.innerHTML = "Ganaste el pc eligio tijeras";
                    break;
            }
            break;
        case 2:
            switch(pc_election) {
                case 1:
                    winner.innerHTML = "Ganaste el pc eligio piedra";
                    break;
                case 3:
                    winner.innerHTML = "Perdiste el pc eligio tijeras";
                    break;
            }
            break;
        case 3:
            switch(pc_election) {
                case 1:
                    winner.innerHTML = "Perdiste el pc eligio piedra";
                    break;
                case 2:
                    winner.innerHTML = "Ganaste el pc eligio papel";
                    break;
            }
            break;
    }
}