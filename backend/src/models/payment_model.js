const mongoose = require('mongoose');

const payment_schema = new mongoose.Schema({
    tenant:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    payment_for:{
        type: String,
        enum:['rent & garbage', 'repairs','other'],
        required: true,
    },
    desc:{
        type: String,
        required: false
    }
})

const Payment = mongoose.model('Payment', payment_schema)

module.exports = Payment;