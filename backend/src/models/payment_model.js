const mongoose = require('mongoose');
const unit_id = mongoose.Schema.Types.ObjectId


const payment_schema = new mongoose.Schema({
    paid_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tenant'
    },
    unit_id:{unit_id},
    payment_for: {
        type: String,
        required: true
    },
    apartment_id:{type: mongoose.Schema.Types.ObjectId,
        ref: 'Apartment'
    }
},{timestamps: true})

const Payment = mongoose.model('Payment', payment_schema);

module.exports = Payment;