// user model
const mongoose = require('mongoose')

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
    
    user_type : {
        type : String,
        enum : ['Admin', 'Agent', 'Tenant'],
        required: true,
    }

})

const User = mongoose.model('User', User_schema)

module.exports = User; 