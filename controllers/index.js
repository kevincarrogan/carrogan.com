'use strict';


module.exports = function (server) {

    server.get('/', function (req, res) {
        var ctx = {};
        
        res.render('index', ctx);
        
    });

};
