var josemanuel = {
    nombre: 'Josemanuel',
    apellido: 'Sifontes',
    edad: 18
}

var sacha = {
    nombre: 'Sacha',
    apellido:  'Lifszyc',
    edad: 28
}

/*var naruto = {
    nombre : 'Naruto',
    clan : 'Uzumaki',
    nivel : 'Genin',
    identidad : 'Aldea oculta entre las hojas',
    objetivo : 'Convertirme en hokage'
}

var sasuke = {
    nombre : 'Sasuke',
    clan : 'Uchiha',
    nivel : 'Genin',
    identidad : 'Aldea oculta entre las hojas',
    objetivo : 'Restablecer el clan Uchiha y matar a Itachi por matar al clan'
}

var sakura = {
    nombre : 'Sakura',
    clan : 'Haruno',
    nivel : 'Genin',
    identidad : 'Aldea oculta entre las hojas',
    objetivo : 'Covertirse en una respetada y gran kunoichi'
}

var gaara = {
    nombre : 'Gaara',
    clan : 'Del desierto',
    nivel : 'Genin',
    identidad : 'Aldea oculta entre la arena',
    objetivo : 'Asesinar para sentirme vivo y tener un objetivo'
}

function presentacionShinobi(ninja) {
    var { nombre } = ninja;
    var { clan } = ninja;
    var { nivel } = ninja;
    var { identidad } = ninja;
    var { objetivo } = ninja;

    console.log(`Soy ${nombre} ${clan}, un ${nivel} de la ${identidad} y mi camino ninja es ${objetivo}`);
}*/

function imprimirNombreMayus(persona) {
    // var nombre = persona.nombre;
    var { nombre } = persona
    console.log(nombre.toUpperCase());
}

function imprimirNombreYEdad(persona) {
    var { nombre } = persona;
    var { edad } = persona;
    console.log(`Hola, mi nombre es ${nombre} y tengo ${edad}`);
}

//imprimirNombreMayus(josemanuel);
//imprimirNombreMayus(sacha);

//imprimirNombreYEdad(josemanuel);
//imprimirNombreYEdad(sacha);
/*presentacionShinobi(naruto);
presentacionShinobi(sasuke);
presentacionShinobi(sakura);
presentacionShinobi(gaara);*/

function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}