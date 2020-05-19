const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
const opts = {crossDomain: true};

const onPeopleResponse = function(persona){
    console.log(`Hola yo soy ${persona.name}`);
} 

function obtenerPersonaje(id){
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(URL, opts, onPeopleResponse);
}

for(var i = 1; i < 70; i++){
    obtenerPersonaje(i);
}

