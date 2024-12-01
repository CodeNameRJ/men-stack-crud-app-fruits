// first define the shape of the ovbject we want to store in our database ----- SCHEMA

//tell mongoose that the model we want to generae is based off the schema and provide a name to it
//mongoose.model('Name', schema)

//share it with the rest of your application
//module.exports = modelName
// get garbage in get garbage out
// const tesla = {
//     make: 'tesla',
//     model: '3',
//     manufacture: 'tesla',
//     year: 2023,
//     color: white,
//     fuel: electric,
//     options: [
//         op1,op2,op
//     ]

// }


// const ford = {
//     make: ford,
//     model: mustang,
//     manufacture: ford,
//     year: 2023,
//     color: red
// }

// when creating schema write object make simple as possible to make it easy to build schema

const mongoose = require('mongoose') // mongoose is assigned

const fruitSchema = new mongoose.Schema({
    name: String,
    isReadyToEat: Boolean,

})

const Fruit = mongoose.model('Fruit', fruitSchema)
// share it with rest of app

module.exports = Fruit

// import i server.js
