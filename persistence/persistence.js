'use strict';

var persistence = require('node-persist');

module.exports = {

    init: function () {
        persistence.init({
            dir: 'storage/configuration',
            stringify: JSON.stringify,
            parse: JSON.parse,
            encoding: 'utf8',
            logging: false,  // can also be custom logging function 
            continuous: true,
            interval: false, // milliseconds 
            ttl: false, // ttl* [NEW], can be true for 24h default or a number in MILLISECONDS 
        });
    },

    get: function (key) {
        return persistence.getItem(key);
    },

    put: function (key, value) {
        console.log('save key: ' + key + ', value: ' + JSON.stringify(value));
        return persistence.setItem(key, value);
    },

};