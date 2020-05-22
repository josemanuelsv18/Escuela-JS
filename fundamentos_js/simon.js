const BTN_INICIO = document.getElementById('btnEmpezar');
const CELESTE = document.getElementById('celeste');
const  VIOLETA = document.getElementById('violeta');
const NARANJA = document.getElementById('naranja');
const VERDE = document.getElementById('verde');

class Juego{
    constructor(){
        this.inicializar()
    }
    inicializar(){
        BTN_INICIO.classList.add('hide');
    }
}

function empezarJuego(){
    var juego = new Juego()
}