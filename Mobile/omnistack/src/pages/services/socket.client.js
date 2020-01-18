import socketio from 'socket.io-client'

const socket = socketio("http://10.0.0.87:5000", {
    autoConnect: false
})

function subscribeToNewDevs(subscribeFunction) {
    socket.on('new-dev', subscribeFunction)
}

function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude, longitude, techs
    }
    socket.connect()
}

const disconnect = () => {
    if (socket.connected) {
        socket.disconnect()
    }
}

export { connect, disconnect, subscribeToNewDevs }