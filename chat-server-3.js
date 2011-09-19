var Net = require('net');

var sockets = [];

var server = Net.createServer(function(socket) {
    sockets.push(socket);

    socket.write('Hola! Bienvenido al chat\n');
    socket.on('data', function(data) {
        var message = socket.address().address + "> " + data.toString();
        for(var i in sockets) {
            if (sockets[i] != socket) {
                sockets[i].write(message);
            }
        }
        console.log(message);
    });

    socket.on('end', function() {
        var i = sockets.indexOf(socket);
        sockets.splice(i, 1);
    });
});

server.listen(2587);
