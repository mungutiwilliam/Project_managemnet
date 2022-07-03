const mongoose = require('mongoose');


const admin_schema  = new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    role : {
        type : String,
        default:'admin',
    },
    password:{
        type: String,
        required: true
    }
   
})

const Admin = mongoose.model('Admin', admin_schema);

module.exports = Admin;