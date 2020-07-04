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
}

newFunction2();
newFunction2('Oscar', 32, 'Venezuela');

//before
let hello = "Hello";
let world = "World";
let phrase = hello + ' ' + world;

//es6
let epicPhrase = `${hello} ${world}`;

console.log(phrase);
console.log(epicPhrase);