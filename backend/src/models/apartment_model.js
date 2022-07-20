// user model
const mongoose = require('mongoose');
const Agent =  require('./agent_model');

const apartment_schema =  new mongoose.Schema({
    name: {
        type: String,
         required: true},

    location: {
        type : String, 
        required: true
    },
    num_units: {
        type : Number,
        required: true
    },
    unit_types: [{  
        type : String,
        enum : ['1B','2B','3B','4B'],
        required: true
    }],
    units_occupied:{
        type : Number
            
    },
    units_available_for_rent:{
        type : Number
    }
})


const Apartment = mongoose.model('Apartment', apartment_schema)

module.exports = Apartment;