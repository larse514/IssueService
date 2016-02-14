/**
 * Created by andrew.larsen on 2/13/2016.
 */
var express = require('express');
var app = express();


//direct all access to base url to the routes file
app.use('/', require('./routes'));

//Dynamic port and address for Openshift, defaults to localhost
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

//Listen on ports above
app.listen(server_port, server_ip_address, function(){
    console.log("Listening on " + server_ip_address + ", server_port " + server_port)
});