//spread operator
const obj = {
    name: 'Josemanuel',
    age: 18,
    country: 'VE'
};

let {country, ...all} = obj;
console.log(all);

const obj = {
    name: 'Josemanuel',
    age: 18
}

const obj1 = {
    ...obj,
    country: 'VE'
}

console.log(obj1);

//Promise Finally
const helloWorld = (() => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    });
});

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

//Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-10-07');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);