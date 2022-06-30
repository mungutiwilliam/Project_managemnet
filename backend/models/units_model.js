const mongoose = require('mongoose');
const unit_id = mongoose.Schema.ObjectId

const unit_schema = new mongoose.Schema({
    unit_id: unit_id,
    unit_type: {
        type: 'string',
        enum:['1B', '2B', '3B', '4B'],
        required: true,
    },
    price: {
        type : Integer,
        required: true,
    },
    tenant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: true,
    }


})

const Unit = mongoose.model('Unit', unit_schema)

module.exports = Unit