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

    },
    passwords:{

    },
    phone_number:{

    },
    assigned_to : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Apartment'}
})

const Agent = mongoose.model('Agent', agent_schema);
module.exports = Agent;