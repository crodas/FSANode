var Http = require('http');

setInterval(function() {
    console.log('ping');
}, 5000);

setInterval(function() {
    Http.get({host:'www.google.com', path: '/'}, function(res) {
        console.log(res.headers);
    });
}, 2000);
