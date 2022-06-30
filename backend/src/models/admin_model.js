const mongoose = require('mongoose');


const admin_schema  = new mongoose.Schema({
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
        required: true
    },
    role : {
        type : String,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
})

const Admin = mongoose.model('Admin', admin_schema);

module.exports = Admin;