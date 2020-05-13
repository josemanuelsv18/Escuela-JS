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
var josemanuel = new persona('Josemanuel', 'Sifontes', 1.65);
var sacha = new persona('Sacha', 'Lifszyc', 1.72);
var erika = new persona('Erika', 'Luna', 1.65);
var arturo = new persona('Arturo', 'Martinez', 1.84);