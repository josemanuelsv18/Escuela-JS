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

async function obtenerPersonajes(){
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map(id => obtenerPersonaje(id));
    try{
        var personajes = await Promise.all(promesas);
        console.log(personajes)
    }catch(id){
        onError(id);
    }
}

obtenerPersonajes()