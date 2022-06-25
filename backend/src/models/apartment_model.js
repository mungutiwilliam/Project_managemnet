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
        type : Number,
        required: true},

    unit_type: {  
        type : String,
        enum : ['1B','2B','3B','4B'],
        required: true, 
        unique: true},
    agent_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Agent'
    }

})

const Apartment = mongoose.model('Apartment', apartment_schema)

module.exports = Apartment; 