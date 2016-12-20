'use restrict';

var Promise = require('bluebird');
var Client = require('node-rest-client').Client;
var restClientConfig = require('./restClientConfig.json');

module.exports = (function () {

    var mine = {};
    var rClient = new Client();

    function getData(url) {

        rClient.get(url, function (rows, res) {
            console.log("Total counts: " + rows.length);
            console.log("Response: " + res);
            var keyMap = {};
            for (var j = 0; j < rows.length; j++) {
                // console.log("data: " + JSON.stringify(rows[j]));
                for (var key in rows[j]) {
                    keyMap[key] = 1;
                    // console.log("[" + key + "]: " + rows[j][key]);
                }
            }
            console.log("Key Map: " + JSON.stringify(keyMap));
        }).on('error', function (err) {
            console.log('something went wrong on the request', err.request.options);
        });

        // handling client error events 
        rClient.on('error', function (err) {
            console.error('Something went wrong on the client', err);
        });
    }

    mine.retrieveData = function () {

        for (var i = 0; i < restClientConfig.restClients.length; i++) {
            console.log("Rest URL: " + restClientConfig.restClients[i].url);
            getData(restClientConfig.restClients[i].url);
        }
    }

    return mine;
})();
