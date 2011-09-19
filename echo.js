
var Net = require('net');

var global = 0;

var server = Net.createServer(function(socket) {
    var privado = 0;
    socket.on('data', function(contenido) {
        global++; privado++;
        socket.write(contenido);
        socket.write(global + '+'+  privado);
    });
});

server.listen(2587);
