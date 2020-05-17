class persona {
    constructor (nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    }
    soyAlto(){
        return this.altura > 1.8;
    }
}
 
class desarrollado extends persona {
    constructor(nombre, apellido, altura, genero){
        super(nombre, apellido, altura, genero);
    }
    saludar(){
        if(this.genero == 'm'){
            console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
        } else if(this.genero == 'f'){
            console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrolladora`);
        } else{
            console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrolladore`);
        }
    }
}

var josemanuel = new persona('Josemanuel', 'Sifontes', 1.65, 'm');
var sacha = new persona('Sacha', 'Lifszyc', 1.72, 'm');
var erika = new persona('Erika', 'Luna', 1.65, 'f');
var arturo = new persona('Arturo', 'Martinez', 1.84, 'm');