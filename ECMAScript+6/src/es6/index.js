//Clase 1
//before
function newFunction(name, age, country){
    var name = name || 'Josemanuel';
    var age = age || 18;
    var country = country || 'Venezuela';
    console.log(`${name}, ${age}, ${country}`);
}

//es6
function newFunction2(name = 'Josemanuel', age = 32, country = 'Venezuela'){
    console.log(`${name}, ${age}, ${country}`);
}//En ES6 se puede agregar valores predeterminados en los parentesis de parametros de
//la función.

newFunction2();
newFunction2('Oscar', 32, 'Venezuela');

//before
let hello = "Hello";
let world = "World";
let phrase = hello + ' ' + world;

//es6
let epicPhrase = `${hello} ${world}`;
//con las comillas invertidas se puede concatenar texto de una manera más sencilla.

console.log(phrase);
console.log(epicPhrase);

//Clase2
//before

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum.\n"
+ "Nam posuere, magna ut varius maximus, nulla augue interdum magna, ac euismod."

//es6
let lorem2 =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Nulla at sapien et arcu placerat sollicitudin ac in magna. In odio lorem,
hendrerit non aliquet nec, iaculis vitae mi. Suspendisse at.`;
//En ES6 se pude hacer textos multilineas de manera más sencilla con comillas invertidas.

console.log(lorem);
console.log(lorem2);

//before
let person = {
    name: 'Josemanuel',
    age: '18',
    country: 'VE'
}
console.log(person.name, person.age);

//es6
let {name, age, country} = person;
console.log(name, age, country);
//Con ES6 se puede desglosar un objeto en multiples variales para llamarlas de manera
//diferente definiendo solo las que se necesitan.

//es6
let team1 = ['Josemanuel', 'Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valentina', 'Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];
//Nota: En ES6 se pude desglosar objetos o arrays dentro de otra variable.

console.log(education);

//Var let y const
{
    var globalVar = 'Global var';
}

{
    let globalLet = 'global Let';
    console.log(globalLet);
}

console.log(globalVar);

const a = 'b';
//!(a = 'a';)
console.log(a);

//Clase 4

let name = 'Josemanuel';
let age = 18;
//before
obj = {name: name, age: age};
//es6
obj2 = {name, age}; //En ES6 si no le asignas un valor al parametro de un objeto este
//se predefine con el mismo nombre del parametro
console.log(obj2);

//arrow functions
const names = [
    {name: 'Josemanuel', age: 18, country: 'VE'},
    {name: 'Oscar', age: 32, country: 'MX'},
    {name: 'Yesica', age: 24, country: 'CO'}
]
//before
let listOfNames = names.map(function (item){
    console.log(item.name);
})
//es6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfName3 = (name, age, country) => {
    //code
}

const listOfName4 = name => {
    //code
}

const square = num => num * num;

//Promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!');
        }else {
            reject('ERROR!!!');
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error));

//Clase 5
//clases
class Calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        let suma = this.valueA + this.valueB;
        return suma;
    }
    rest(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        let diferencia = this.valueA - this.valueB;
        return diferencia;
    }
    multi(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        let producto = this.valueA * this.valueB;
        return producto;
    }
    div(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        let rsltd = this.valueA / this.valueB;
        return rsltd;
    }
}

const calc = new Calculator();
console.log(calc.sum(2, 2));
console.log(calc.rest(10, 3));
console.log(calc.multi(5, 4));
console.log(calc.div(24, 4));

//modulos
import { hello } from './module';
hello();

//generadores
function* helloWorld() {
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'world';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);