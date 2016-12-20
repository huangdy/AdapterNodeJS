'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var restClient = require('./clients/restClient');
var server = express();

server.use(bodyParser.json());
server.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));
server.use(bodyParser.urlencoded({
    extended: false
}));
server.use(cookieParser());

var port = process.env.PORT || 8081;
server.listen(port, function () {
    console.log('Adapter is ready on port: ' + port);
    restClient.retrieveData();
});
