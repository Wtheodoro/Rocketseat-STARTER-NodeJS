const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Initializing app
const app = express()
app.use(express.json())

// Initializing DB
mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
    { useNewUrlParser: true, useUnifiedTopology: true },
)
requireDir('./src/models')

// First route
app.use('/api', require('./src/routes'))

app.listen(3002)