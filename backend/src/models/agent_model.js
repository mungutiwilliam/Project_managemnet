const mongoose = require('mongoose');

const agent_schema = new mongoose.Schema({
    first_name:{
        type: String,
    },
    last_name:{
        type: String,
    },
    email : {
        type: String,
        unique: true
    },
    password:{
        type: String,
    },
    role : {
        type : String,
        default:'agent',
    },
    phone_number:{
        type: String,
        unique: true
    },
    assigned_to : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Apartment'
    },
    tenant_registered:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tenant'
    }    
})

const Agent = mongoose.model('Agent', agent_schema);
module.exports = Agent;