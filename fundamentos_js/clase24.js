function herate(prototypeChild, prototypeFather){
    var fn = function(){}
    fn.prototype = prototypeFather.prototype;
    prototypeChild.prototype = new fn;
    prototypeChild.prototype.constructor = prototypeChild;
}

function persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura
}

persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}
persona.prototype.soyAlto = function() {
    return this.altura > 1.8;
}

function desarrollador(nombre, apellido, genero){
    this.nombre = nombre;
    this.apellido = apellido;
    this.genero = genero;
}

herate(desarrollador, persona);

desarrollador.prototype.saludar = function(){
    if(this.genero == 'm'){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
    } else if(this.genero == 'f'){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrolladora`);
    } else{
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrolladore`);
    }
}


/*var josemanuel = new persona('Josemanuel', 'Sifontes', 1.65, 'm');
var sacha = new persona('Sacha', 'Lifszyc', 1.72, 'm');
var erika = new persona('Erika', 'Luna', 1.65, 'f');
var arturo = new persona('Arturo', 'Martinez', 1.84, 'm');*/