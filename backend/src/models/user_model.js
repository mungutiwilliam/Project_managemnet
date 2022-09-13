const mongoose = require('mongoose');


const user_schema  = new mongoose.Schema({
    
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        index:true
    },
    role:{
        type : String,
        enum: ['admin', 'super-admin', 'tenant','agent'],
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    phone_number:{
        type: String,
        unique: true,
        required: true,
        maxLength: 10,
        minLength: 10
    },
    apartment:[{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Apartment',
        required: false,
        index: true
    }],
    registered_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        index : true 
    },
    tenant_registered:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        index : true 
    },
    balance:{
        type : Number,
        required: false
    },
    unit:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Unit',
        required: false,
        index: true
    }, 
    payment:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment',
        required: false,
        index:true
    }]


})


const User = mongoose.model('User', user_schema);

module.exports = User;