let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; 89K (gzipped: 28.1K)

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === 4){
            if(xhttp.status === 2000){
                callback(null, JSON.parse(xhttp.responseText))
            }else{
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}