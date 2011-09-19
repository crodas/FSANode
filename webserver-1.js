var Http = require('http');

var server = Http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('hola mundo');
});

server.listen(8080);
