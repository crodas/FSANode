var Net = require('net');

var server = Net.createServer(function(socket) {
    socket.write('Hola!\n');
    socket.end();
});

server.listen(2587);

## dummy