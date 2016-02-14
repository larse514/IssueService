/**
 * Created by andrew.larsen on 2/13/2016.
 */
var http = require('http');

var options = {
    host : "http://www.comicvine.com",
    path : "/api/issues?api_key=8ff93319a99802e5d8e7c9d51f7e7e09b0582a01",
};

callback = function(response){
    var str = '';

    //another chunk of data has been recieved, so append it to `str`
    response.on('data', function (chunk) {
        str += chunk;
    });

    //the whole response has been recieved, so we just print it out here
    response.on('end', function () {
        console.log(str);
    });
};

http.request(options, callback).end();
