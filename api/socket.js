let io = require('socket.io')();

io.on('connection', function(socket){
    console.log('A user connected');
});

module.exports = io;