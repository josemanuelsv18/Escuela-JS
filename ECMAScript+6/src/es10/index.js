//method flat
//devuelve una matriz con una submatriz aplanada,
//recibe como argumento la profundidad
let array = [1, 2, 3, [1, 2 ,3, [1, 2, 3]]];

console.log(array.flat(2));

//flatMap
//mapear cada elemento, pasarle una función y aplanar segun el resultado
let array = [1, 2, 3 ,4 , 5];

console.log(array.flatMap(value => [value, value * 2]));

//trimstart/end

let hello = '       hello world';
console.log(hello);
console.log(hello.trimStart());

let hello ='Hello world             ';
console.log(hello);
console.log(hello.trimEnd());

//optional cathc biding
try {

}catch/*ya no es necesario colocar "(error)"*/ {
    error
}

//fromEntries
//arrays to objects
let entries = [["names", "Josemanuel"], ["age", 32]];
console.log(Object.fromEntries(entries));

//symbol object
let mySymbl = 'My Symbol';
let symbol = Symbol(mySymbl);
console.log(symbol.description);