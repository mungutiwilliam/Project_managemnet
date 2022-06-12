// user model
const mongoose = require('mongoose')

const apartment_schema =  new mongoose.Schema({
    name: {
        type: String,
         required: true},

    location: {
        type : String, 
        required: true},

    num_units: {
        type : String, //number
        required: true},

    unit_types: {  // enum type : String,
        type : String,
        enum : ['1B','2B','3B'],
        required: true, 
        unique: true},
         
    Password: {type : String,
         required: false},

})

const Apartment = mongoose.model('Apartment', apartment_schema)

module.exports = Apartment; 