class persona {
    constructor (nombre, apellido, altura, genero){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
        this.genero = genero
    }
    saludar(fn){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
        if(fn){
            fn(this.nombre, this.apellido, false)
        }
    }
    soyAlto(){
        return this.altura > 1.8;
    }
}

class desarrollador extends persona {
    constructor(nombre, apellido, altura, genero){
        super(nombre, apellido, altura, genero);
    }
    saludar(fn){
        var {nombre, apellido} = this;
        if(this.genero == 'm'){
            console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrollador`);
        } else if(this.genero == 'f'){
            console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrolladora`);
        } else{
            console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrolladore`);
        }
        if(fn){
            fn(nombre, apellido, true)
        }
    } 

}



function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if(esDev){
        console.log(`Ah, no sabía que eras desarrollador/a`)
    }
}
    
var josemanuel = new persona('Josemanuel', 'Sifontes', 1.65, 'm');
var sacha = new desarrollador('Sacha', 'Lifszyc', 1.72, 'm');
var erika = new persona('Erika', 'Luna', 1.65, 'f');
var arturo = new desarrollador('Arturo', 'Martinez', 1.84, 'm');

josemanuel.saludar(responderSaludo); 
sacha.saludar(responderSaludo);
erika.saludar();
arturo.saludar(responderSaludo);