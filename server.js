const express = require('express')

const app = express()


//turninary expression - if the port is avalible return that , other wise return 3000
const PORT = process.env.PORT ? process.env.port : '3000';


// root route
app.get('/', (req, res) => {
    res.send('Hello world')

})







app.listen(PORT, () => {
    console.log(`app started on ${PORT}`)
})
