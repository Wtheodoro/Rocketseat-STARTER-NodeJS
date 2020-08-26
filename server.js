const express = require('express')
const mongoose = require('mongoose')

// Initializing app
const app = express()

// Initializing DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true },
    )

// First rout
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3002)