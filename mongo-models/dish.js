const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dishSchema = new Schema({
    name: String,
    country: String,
    tasty: Boolean,
    chefsId: String
})

module.exports = mongoose.model('Dish', dishSchema)