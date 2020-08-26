const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Initializing app
const app = express()

// Initializing DB
mongoose.connect(
    "mongodb://localhost:27017/nodeapi"
)
requireDir('./src/models')

// First rout
app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(3002)