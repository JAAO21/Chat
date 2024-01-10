const socket = require('socket.io');

//arrow function socketIo
const createSocketIo = (serverHttp) => {
    //creation of http server con express
    const socketIo = new socket.Server(serverHttp, {
        cors: {
            origin: 'http://localhost:5173'
        }
    });

    //server sockect io on
    socketIo.on('connection', (socket) => {
        console.log('user conected', socket.id)
        socket.on('sendMessage', (data) => {
            socket.broadcast.emit('message', {
                body: data,
                user: socket.id
            })
        })

    })
}

module.exports = createSocketIo;