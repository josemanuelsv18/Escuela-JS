const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
const opts = {crossDomain: true};

function obtenerPersonaje(id){
    return new Promise((resolve, reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(URL, opts, function(data){
         resolve(data)
         })
         .fail(() => reject(id))
    })
}

function presentar(number, nombre){
    console.log(`El personaje ${number} es ${nombre}`)
}

function onError(id){
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

var ids = [1, 2, 3, 4, 5, 6, 7]
/*var promesas = ids.map(function(id){
    return obtenerPersonaje(id)
})*/
var promesas = ids.map(id => obtenerPersonaje(id));
Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)

/*obtenerPersonaje(1)
    .then(personaje1 => {
        presentar(1, personaje1.name);
        return obtenerPersonaje(2)
    })
    .then(personaje2 => {
        presentar(2, personaje2.name);
        return obtenerPersonaje(3)
    })
    .then(personaje3 => {
        presentar(3, personaje3.name);
        return obtenerPersonaje(4)
    })
    .then(personaje4 => {
        presentar(4, personaje4.name);
        return obtenerPersonaje(5);
    })
    .then(personaje5 => {
        presentar(5, personaje5.name)
        return obtenerPersonaje(6)
    })
    .then(personaje6 => {
        presentar(6, personaje6.name);
        return obtenerPersonaje(7);
    })
    .then(personaje7 => {
        presentar(7, personaje7.name);
    })
    .catch(onError)*/