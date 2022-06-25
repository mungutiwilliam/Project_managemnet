// user model
const mongoose = require('mongoose');
const user_id  = mongoose.Schema.ObjectId;

const User_schema =  new mongoose.Schema({
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
    User_id : user_id,

    Balance : {
        type : Integer,
        required: false
    },
    assigned_to : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'}

})

const User = mongoose.model('User', User_schema)

module.exports = User; 