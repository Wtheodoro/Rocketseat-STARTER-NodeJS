const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Initializing app
const app = express()

// Initializing DB
mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
    { useNewUrlParser: true, useUnifiedTopology: true },
)
requireDir('./src/models')

const product = mongoose.model('Product')

// First rout
app.get("/", (req, res) => {
    product.create({
        title: 'React Native',
        description: 'Build native apps with react',
        url: 'http://github.com/facebook/react-native'
    })
    res.send("Hello World!!!!!")
})

app.listen(3002)