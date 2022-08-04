const mongoose = require('mongoose');


const unit_schema = new mongoose.Schema({
    apartment:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Apartment',
        index: true,
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
    price:{
        type : Number,
        required: true,
    },
    tenant:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Users',
        index: true,
        required: false
         
    }
})

const Unit = mongoose.model('Unit', unit_schema)

module.exports = Unit;