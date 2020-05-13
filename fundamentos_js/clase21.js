function persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

persona.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}
persona.prototype.soyAlto = function(){
    if(this.altura > 1.8){
        console.log(`${this.nombre} es alto`);
    }else{
        console.log(`${this.nombre} es bajo`);
    }
}

var josemanuel = new persona('Josemanuel', 'Sifontes', 1.65);
var sacha = new persona('Sacha', 'Lifszyc', 1.75);
var jack = new persona('Jack', 'Chase', 1.87);
var lebron = new persona('Lebron', 'James', 2.1);

var personas = [josemanuel, sacha, jack, lebron];

for(var i = 0; i < personas.length; i++){
    personas[i].soyAlto();
}

josemanuel.saludar();
sacha.saludar();