const mongoose = require('mongoose');

const agent_schema = new mongoose.Schema({
    First_Name:{
        type: String,
        required: true
    },
    Last_name:{
        type: String,
        required: true
    },
    Email : {
        type: String,
        required: true,
        unique: true
    },
    passwords:{
        type: String,
        required: true,

    },
    role : {
        type : String,
        required: true,
    },
    phone_number:{
        type: String,
        required: true
    },
    assigned_to : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Apartment'}
})

const Agent = mongoose.model('Agent', agent_schema);
module.exports = Agent;