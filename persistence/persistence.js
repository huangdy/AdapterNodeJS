var persistence = require('node-persist');

module.exports = (function () {

    var mine = {};

    mine.init = function () {
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
    };

    mine.get = function (key) {
        return persistence.getItem(key);
    };

    mine.put = function (key, value) {
        console.log('save key: ' + key + ', value: ' + JSON.stringify(value));
        return persistence.setItem(key, value);
    };

    return mine;
})();