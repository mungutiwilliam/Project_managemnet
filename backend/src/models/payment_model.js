const mongoose = require('mongoose');


const payment_schema = new mongoose.Schema({
    tenant:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        index: true,
        required: true
    },
    payment_for:{
        type: String,
        enum: ['rent','repairs', 'other'],
        default: 'rent',
        required: true
    },
    desc:{
        type: String,
        required: true
       
    },
    payment:{ 
        type: Number,
        required: true  
    }
    
},{timestamps: true})

const Payment = mongoose.model('Payment', payment_schema);

module.exports = Payment;