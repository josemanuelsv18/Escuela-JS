// // Boolean
// let muted: boolean = true;
// muted = false;

// //numeros
// let numerador: number = 42;
// let denominador: number = 6;
// let resultado = numerador / denominador;

// //stringd
// let nombre: string = 'Josemanuel';
// let saludo = `Me llamo ${nombre}`;

// //arreglos
// let uchihaClan: string[] = [];
// uchihaClan = ['Shisui', 'Itachi', 'Sasuke', 'Madara', 'Obito', 'Sarada', 'Fugaku'];
// uchihaClan.push('56');

// let peopleAndNumbers: Array<string | number> = [];
// peopleAndNumbers.push('Ricardo');
// peopleAndNumbers.push(42);

// //Enum
// enum color{
//     rojo = 'rojo',
//     azul = 'azul',
//     verde = 'verde'
// }

// let colorFavorito: color = color.rojo;
// console.log(`Mi color favorito es ${colorFavorito}`)

// //Any
// let comodin: any = 'Joker';
// comodin = {type: 'Wildcard'};

// //object
// let someObject: object = {type: 'Wildcard'}

//funciones
function add(a :number, b: number): number{
    return a +b;
}
const sum = add(13, 42)

function createAdder(a: number): (number) => number{
    return function (b: number){
        return b + a
    }
}
const addFour = createAdder(17);
const fourPlusSix = addFour(6);

function fullName(firstName: string, lastName: string = 'Smith'): string{
    return `${firstName} ${lastName}`;
}
const josemanuel = fullName('Josemanuel');
console.log(josemanuel);

//Interface
enum Color {
    rojo = 'rojo',
    verde = 'verde',
    azul = 'azul',
    amarillo = 'amarillo'
}
interface rectangulo{
    ancho: number,
    alto: number,
    color?: Color
}
let rect: rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.rojo
}
function area(r: rectangulo): number{
    return r.alto * r.ancho
}
const areaRect = area(rect);
console.log(areaRect);
rect.toString = function (){
    return this.color ? `un rectangulo ${this.color}` : 'Un rectangulo';
}
console.log(rect.toString());