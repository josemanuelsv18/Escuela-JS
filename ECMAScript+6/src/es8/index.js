//object.entries
//Nos regresa una matriz sobre como estan esablecido los parametros y sus valores
//dentro de los objetos
const data = {
    frontend: 'Oscar',
    backend: 'Josemanuel',
    design: 'Ana'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//Object.values
//devuelve valores de un objeto a un arreglo
const data = {
    frontend: 'Oscar',
    backend: 'Josemanuel',
    design: 'Ana',
}

const values = Object.values(data);
console.log(values);
console.log(value.length);

//padding
const string = 'hello';
console.log(string.padStart(7, 'hi')); //expected hihello
console.log(string.padEnd(12, ' -----')); //expected hello -----

//Async Await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Hello world'), 3000)
            : reject(new Error('Test Error'))
    });
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch(error){
        console.log(error);
    }
};
anotherFunction();