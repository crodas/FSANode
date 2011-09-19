var Http = require('http');

var server = Http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': });
    res.write('hola\n');
    setTimeout(function() {
        res.end('mundo');
    }, 5000);
});

server.listen(8080);
