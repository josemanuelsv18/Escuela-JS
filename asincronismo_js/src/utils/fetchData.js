//exportado de api
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //89K (gzipped: 28.1K)

//verificación
const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4){
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('ERROR!!!', url_api))
            }
        });
        xhttp.send();
    });
}

module.exports = fetchData;