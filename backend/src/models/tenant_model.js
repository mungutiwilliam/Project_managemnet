// user model
const mongoose = require('mongoose');

const tenant_schema =  new mongoose.Schema({
    first_name: {
        type: String,
    },

    last_name: {
        type : String, 
    },
    email: {
        type : String, 
    },
    phone_number: {
        type : String, 
         unique: true},
    password: {type : String,
         },
    role : {
        type : String,
        default:'tenant',
    },
    unit_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Unit'
    },
    balance : {
        type : Number,
        required: false
    },
    agent_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Agent'
    }

})

const Tenant = mongoose.model('Tenant', tenant_schema)

module.exports = Tenant; 