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