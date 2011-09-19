var Http = require('http');

var server = Http.createServer(function(req, res) {
    res.writeHead(200);
    res.write('hola\n');
    setTimeout(function() {
        res.end('mundo\n');
    }, 5000);
});

server.listen(8080);
