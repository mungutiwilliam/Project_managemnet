const mongoose = require('mongoose');
const Tenant = require('./tenant_model');
const Apartment = require('./apartment_model');
const Unit = require('./unit_model');


const payment_schema = new mongoose.Schema({
    paid_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Tenant,
        index: true
    },
    payment_for:[{
        type: String,
        enum: ['rent','repairs', 'other'],
        defaul:'rent',
        required: true
    }],
    decription:{
        type: String,
    },
    apartment_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Apartment,
        index: true
    },
    unit_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Unit,
        index: true
    },
    payment_amount :{ 
        type: Number
    }
},{timestamps: true})

const Payment = mongoose.model('Payment', payment_schema);

module.exports = Payment;