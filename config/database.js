const mongoose = require('mongoose') // require mongoose library

mongoose.connect(process.env.MONGODB_URI) // connection


mongoose.connection.on('connected', () => {
    console.log(`Connected to Mongoose ${mongoose.connection.name} `)
})


