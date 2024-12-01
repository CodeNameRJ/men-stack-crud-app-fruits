require('dotenv').config() // always have this first
require('./config/database')
const express = require('express')

// models
const Fruit = require('./models/fruit')
// start of server

const app = express()
//turninary expression - if the port is avalible return that , other wise return 3000
const PORT = process.env.PORT ? process.env.port : '3000';


// root route
app.get('/', (req, res) => {
    // res.send('Hello world')
    res.render('index.ejs')

})




app.listen(PORT, () => {
    console.log(`app started on ${PORT}`)
})
