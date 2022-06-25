// user model
const mongoose = require('mongoose');
const tenant_id  = mongoose.Schema.ObjectId;

const tenant_schema =  new mongoose.Schema({
    First_name: {
        type: String,
         required: true},

    Last_name: {
        type : String, 
        required: true},

    Email: {
        type : String, 
        unique : true,
        required: true},

    Phone_number: {
        type : String,
         required: true, 
         unique: true},
         
    Password: {type : String,
         required: false},
    
    User_type : {
        type : String,
        enum : ['admin', 'agent', 'tenant'],
        required: true,
    },
    Tenant_id : tenant_id,

    Balance : {
        type : Integer,
        required: false
    }

})

const Tenant = mongoose.model('Tenant', tenant_schema)

module.exports = Tenant; 