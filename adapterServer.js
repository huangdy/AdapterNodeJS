'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var RestClient = require('./restClient/restClient');
var Persistence = require('./persistence/persistence');
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
    Persistence.init();
    RestClient.retrieveData();
});
