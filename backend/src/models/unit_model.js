const mongoose = require('mongoose');

const unit_schema = new mongoose.Schema({
    apartment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Apartment'
    },
    unit_type: {
        type: String,
        enum:['1B', '2B', '3B', '4B'],
        required: true,
    },
    price: {
        type : Number,
        required: true,
    },
    tenant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: true,
    }
})

const Unit = mongoose.model('Unit', unit_schema)

module.exports = Unit;