var josemanuel = {
    nombre: 'Josemanuel',
    apellido: 'Sifontes',
    edad: 18,
    peso: 75
}
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año ${josemanuel.nombre} pesa ${josemanuel.peso}kg`);

const CAMBIO_PESO = 0.3;

const aumentarDePeso = persona => persona.peso += CAMBIO_PESO;
const adelgazar = persona => persona.peso -= CAMBIO_PESO;
const comeMucho = () => Math.random() < 0.3;
const bajarDePeso = () => Math.random() < 0.4;

//const DAYS_OF_YEAR = 365;

const META = josemanuel.peso - 3;
var dias = 0;

while(josemanuel.peso > META){
    if(comeMucho()){
        //aumentar de peso
        aumentarDePeso(josemanuel);
    }
    if (bajarDePeso()) {
        //adelgazar
        adelgazar(josemanuel);
    }
    dias++;
}
console.log(`Pasaron ${dias} hasta que ${josemanuel.nombre} llego a un peso adecuado`);
/*for(var i = 1; i <= DAYS_OF_YEAR; i++){
    var random = Math.random();

    if(random < 0.25){
        //aumentar de peso
        aumentarDePeso(josemanuel);

    } else if(random < 0.50){
        //bajar de peso
        adelgazar(josemanuel);
    }else {
        //se mantiene igual
    }
}*/

//console.log(`Al final del año ${josemanuel.nombre} pesa ${josemanuel.peso.toFixed(1)}kg`);