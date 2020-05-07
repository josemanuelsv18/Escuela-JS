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

function imprimirNombreMayus({nombre}) {
    console.log(nombre.toUpperCase());
}

imprimirNombreMayus(josemanuel);
imprimirNombreMayus(sacha);