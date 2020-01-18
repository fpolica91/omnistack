const socket = require('socket.io')
const parseStringtoArray = require('./Models/utils/parseStringtoArray')
const calculateDistance = require('./utilitie.functions/calculate.distance')



const connections = []

let io

exports.socketIO = (server) => {
    io = socket(server)
    io.on('connection', socket => {
        const { latitude, longitude, techs } = socket.handshake.query
        connections.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude)
            },
            techs: parseStringtoArray(techs)
        })
    })
}


exports.findConnections = (coordinates, techs, ) => {
    return connections.filter(connection => {
        return calculateDistance(coordinates, connection.coordinates) < 20
            && connection.techs.some(item => techs.includes(item))
    })
}

exports.sendMessage = (to, message, data) => {
    to.forEach(connection => {
        io.to(connection.id).emit(message, data)
    });
}