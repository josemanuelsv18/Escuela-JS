const BTN_INICIO = document.getElementById('btnEmpezar');
const CELESTE = document.getElementById('celeste');
const VIOLETA = document.getElementById('violeta');
const NARANJA = document.getElementById('naranja');
const VERDE = document.getElementById('verde');

class Juego{
    constructor(){
        this.inicializar();
        this.generarSecuencia();
    }
    inicializar(){
        BTN_INICIO.classList.add('hide');
        this.nivel = 1;
        this.colores = {
            celeste: CELESTE,
            violeta: VIOLETA,
            naranja: NARANJA,
            verde: VERDE
        }
    }
    generarSecuencia(){
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
    }
}

function empezarJuego(){
    window.juego = new Juego()
}