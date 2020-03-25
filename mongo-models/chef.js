const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chefSchema = new Schema({
    name: String,
    rating: Number
})

module.exports = mongoose.model('Chef', chefSchema)