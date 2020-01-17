const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./Routes/routes')
app.use(express.json())

mongoose.connect('mongodb://localhost/omnistack',
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })





app.use(router)
app.listen(5000)