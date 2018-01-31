const server = require('http').createServer(function(req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Tic Tac Toe World!');
    }),
    io = require('socket.io')(server);

require('./node-server/node-server')(io); //inculde ios module
server.listen('8190', function() {
    console.log('Start');
});