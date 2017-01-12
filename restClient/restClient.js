'use strict';

var restClientConfig = require('./restClientConfig.json');
var Persistence = require('../persistence/persistence');
var Client = require('node-rest-client').Client;
var rClient = new Client();

function getData(c) {

    rClient.get(c.url, function (rows, res) {
        console.log('Total counts: ' + rows.length);
        console.log('Response: ' + res);
        var keyArray = [];
        for (var j = 0; j < rows.length; j++) {
            for (var key in rows[j]) {
                keyArray.push(key);
            }
        }
        console.log('Key List: ' + JSON.stringify(keyArray));
        Persistence.put(c.type, keyArray);
    }).on('error', function (err) {
        console.log('something went wrong on the request', err.request.options);
    });

    // handling client error events 
    rClient.on('error', function (err) {
        console.error('Something went wrong on the client', err);
    });
}


module.exports = {

    retrieveData: function () {

        for (var i = 0; i < restClientConfig.restClients.length; i++) {
            console.log('Rest URL: ' + JSON.stringify(restClientConfig.restClients[i]));
            getData(restClientConfig.restClients[i]);
        }
    }
};
