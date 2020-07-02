const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
const opts = {crossDomain: true};

 

function obtenerPersonaje(id, callback){
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(URL, opts, function(persona){
        console.log(persona);
        console.log(`Hola yo soy ${persona.name}`);
    });

    if(callback){
        callback();
    }
}

/*for(var i = 1; i < 100; i++){
    obtenerPersonaje(i);
}*/
obtenerPersonaje(1, function (){
    obtenerPersonaje(2, function (){
        obtenerPersonaje(3, function (){
            obtenerPersonaje(4, function(){
                obtenerPersonaje(5, function(){
                    obtenerPersonaje(6, function(){
                        obtenerPersonaje(7);
                    });
                });
            });
        });
    });
});