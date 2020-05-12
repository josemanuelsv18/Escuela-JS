var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

function imprimirProfesiones(persona) {
    
    console.log(`${persona.nombre} es:`);
    if(persona.ingeniero) {
        console.log(' Ingeniero');
    }
    if(persona.cocinero) {
        console.log(' Cocinero');
    }
    if(persona.cantante) {
        console.log(' Cantante');
    }
    if(persona.dj) {
        console.log(' Dj');
    }
    if(persona.guitarrista) {
        console.log(' Guitarrista');
    }
    if(persona.drone) {
        console.log(' Piloto de drines');
    }
}

imprimirProfesiones(sacha);

const MAYORIA_DE_EDAD = 18;

/*var es_mayor_de_edad = function(persona){
    return persona.edad >= MAYORIA_DE_EDAD;
}*/

var es_mayor_de_edad = persona => persona.edad >= MAYORIA_DE_EDAD;

function mayoriaDeEdad(persona) {
    if(es_mayor_de_edad(persona)){
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
}

var acceso_dengado = persona => persona.edad =! es_mayor_de_edad;

function permitirAcceso(persona){
    if(acceso_dengado(persona)){
        console.log('Acceso denegado');
    }
}