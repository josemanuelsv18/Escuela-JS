const BTN_INICIO = document.getElementById('btnEmpezar');
const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const ULTIMO_NIVEL = 10;

class Juego{
    constructor(){
        this.inicializar();
        this.generarSecuencia();
        setTimeout(this.siguienteNivel, 500)
    }

    inicializar(){
        this.inicializar = this.inicializar.bind(this);
        this.elegirColor = this.elegirColor.bind(this);
        this.siguienteNivel = this.siguienteNivel.bind(this);
        this.toggleBtnEmpezar()
        this.nivel = 1;
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }
    toggleBtnEmpezar(){
      if(BTN_INICIO.classList.contains('hide')){
          BTN_INICIO.classList.remove('hide');
      } else {
        BTN_INICIO.classList.add('hide');
      }  
        
    }

    generarSecuencia(){
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
    }

    siguienteNivel(){
        this.subnivel = 0;
        this.iluminarSecuencia()
        this.addClickEvent()
    }

    transformarNumAColor(numero){
        switch(numero){
            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
        }
    }

    transformarColorANum(color){
        switch(color){
            case 'celeste':
                return 0
            case 'violeta':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3
        }
    }

    iluminarSecuencia(){
        for(let i = 0; i < this.nivel; i++){
            const color = this.transformarNumAColor(this.secuencia[i]);
            setTimeout(() => this.iluminarColor(color), 1000 * i)
        }
    }

    iluminarColor(color){
        this.colores[color].classList.add('light');
        setTimeout(() => this.apagarColor(color), 350)
    }

    apagarColor(color){
        this.colores[color].classList.remove('light');
    }

    addClickEvent(){
        this.colores.celeste.addEventListener('click', this.elegirColor);
        this.colores.violeta.addEventListener('click', this.elegirColor);
        this.colores.naranja.addEventListener('click', this.elegirColor);
        this.colores.verde.addEventListener('click', this.elegirColor);
    }

    deleteClickEvent(){
        this.colores.celeste.removeEventListener('click', this.elegirColor);
        this.colores.violeta.removeEventListener('click', this.elegirColor);
        this.colores.naranja.removeEventListener('click', this.elegirColor);
        this.colores.verde.removeEventListener('click', this.elegirColor);
    }

    elegirColor(ev){
        const nombreColor = ev.target.dataset.color;
        const numeroColor = this.transformarColorANum(nombreColor);
        this.iluminarColor(nombreColor)

        if(numeroColor === this.secuencia[this.subnivel]){
            this.subnivel++;
            if(this.subnivel === this.nivel){
                this.nivel++;
                this.deleteClickEvent()
                if(this.nivel === (ULTIMO_NIVEL + 1)){
                this.ganoEljuego()
               }else{
                   setTimeout(this.siguienteNivel, 1500); 
               }
            }
        } else {
            this.perdioElJuego();
        }
    }
    ganoEljuego(){
        swal('Ganaste!', 'Pasaste todos los niveles y ganaste este juego de Platzi', 'success')
            .then(this.inicializar);
    }
    perdioElJuego(){
        swal('Perdiste :(', 'No te Preocupes puedes volver a intentarlo', "error")
            .then(() => {
                this.deleteClickEvent();
                this.inicializar();
            })
    }
}

function empezarJuego(){
    window.juego = new Juego()
}