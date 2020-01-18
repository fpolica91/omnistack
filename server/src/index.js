const express = require('express')
const app = express()
const mongoose = require('mongoose')
const http = require("http")
const router = require('./Routes/routes')
const { socketIO } = require('./websocket')
app.use(express.json())
const server = http.Server(app)
socketIO(server)


mongoose.connect('mongodb://localhost/omnistack',
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })





app.use(router)
server.listen(5000)