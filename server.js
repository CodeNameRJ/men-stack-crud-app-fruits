require('dotenv').config() // always have this first
require('./config/database')
const express = require('express')
const methodOverride = require('method-override')
const morgan = require('morgan')



// models
const Fruit = require('./models/fruit')
// start of server

const app = express()
//turninary expression - if the port is avalible return that , other wise return 3000
const PORT = process.env.PORT ? process.env.port : '3000';

// Middleware // abobe your route // takes the request does somehting with it and continues-- looks at request body turs that into a JS object // when a form is submitted; if theres a body in the request middle ware looks at body turns to JS -- object looks at name property
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
app.use(morgan('dev')) //gives y9ou dev level logs


// root route / home page
app.get('/', (req, res) => {
    // res.send('Hello world')
    res.render('index.ejs')

})

// FRUIT ROUTE // query the data to sh9ow infomation
app.get('/fruits', async(req, res) => {
    const fruits = await Fruit.find()
    console.log(fruits)
    res.render('fruits/index.ejs', {fruits: fruits})// render methid takes two arg- path and options --

})


// set up a route to show a form to add a fruit
app.get('/fruits/new', (req, res) => {
    res.render('fruits/new.ejs')



})

// handle the submission of the form
app.post('/fruits', async (req, res) => {
    //pull he info from the request.body
    // console.log(req.body)
    if (req.body.isReadyToEat) {
        req.body.isReadyToEat = true; // overirde the value of on to true

    } else {
        req.body.isReadyToEat = false

    }

    //model.create(body.info)
    await Fruit.create(req.body)

    //send the user to some place
    res.redirect('/fruits') // sends a get to get route above and render template
})

app.get('/fruits/:id', async (req, res) => { // has to be pulled from database so async
    //grab the id from the params
    const fruitId = req.params.id
    //use the id to find the recod in the database
    const fruit = await Fruit.findById(fruitId)
    //render the show template
    res.render('fruits/show.ejs', {fruit: fruit}) // get error ? always add variable as object to send argument in render

})


app.delete('/fruits/:id', async (req, res) => {
        //grab the id from the params
        const fruitId = req.params.id

        //use the id to find the recod in the database
        await Fruit.findByIdAndDelete(fruitId)

        // send them back to the list of all fruits
        res.redirect('/fruits')

})













// when a form is submiited ,(post or put) whne theres a body in req it takes body and turns into JS object


// set up a route to show a form to edit a fruit

app.get('/fruits/:id/edit', async (req, res) => {
    //grab the id from the params
    const fruitId = req.params.id

    // find the fruit in the database
    const fruit = await Fruit.findById(fruitId)


    //render the dit dform and passs it the fruit we want to edit
    res.render('fruits/edit.ejs', {fruit: fruit})

    //use the id to find the recod in the database




})






app.put('/fruits/:id', async (req, res) => {
    //grab the id from the params
    const fruitId = req.params.id

    if (req.body.isReadyToEat) {
        req.body.isReadyToEat = true; // overirde the value of on to true

    } else {
        req.body.isReadyToEat = false

    }


    //use the id to find the recod in the database
    await Fruit.findByIdAndUpdate(fruitId,req.body )// informaiton comig from form 2nd param

    // send them back to the list of all fruits
    // res.redirect('/fruits')
       res.redirect(`/fruits/${fruitId}`)



})
// handle ther submission of the form



// a slash (/new) an edit form
// localhost;3000/fruit/:id/edit





app.listen(PORT, () => {
    console.log(`app started on ${PORT}`)
})
