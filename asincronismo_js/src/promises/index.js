const someThingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Resuelto exitosamente');
        }else{
            let error = new Error('Error en la primera promesa')
            reject(error);
        }
    });
}

someThingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const someThingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('True');
            }, 3000)
        }else{
            let error = new Error('Error en la segunda promesa');
            reject(error);
        }
    });
}

someThingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err))

Promise.all([someThingWillHappen(), someThingWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    })