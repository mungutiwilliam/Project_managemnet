const mongoose = require('mongoose');


const payment_schema = new mongoose.Schema({
    paid_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tenant'
    },
    payment_for:{
        type: String,
        enum: ['rent','repairs', 'other'],
        defaul:'rent',
        required: true
    },
    decription:{
        type: String,
    },
    apartment_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Apartment'
    },
    payment_amount :{ 
        type: Number}
},{timestamps: true})

const Payment = mongoose.model('Payment', payment_schema);

module.exports = Payment;