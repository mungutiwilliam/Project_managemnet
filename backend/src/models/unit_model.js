const mongoose = require('mongoose');
const Tenant = require('./tenant_model');
const Apartment = require('./apartment_model');

const unit_schema = new mongoose.Schema({
    apartment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Apartment,
        required: true
    },
    unit_type: {
        type: String,
        enum:['1B', '2B', '3B', '4B'],
        required: true,
    },
    numb_of_bathrooms:{
        type: Number,
        required: true,
    },
    price: {
        type : Number,
        required: true,
    }
})

const Unit = mongoose.model('Unit', unit_schema)

module.exports = Unit;