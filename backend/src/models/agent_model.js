const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Apartment = require('./apartment_model');
const Admin = require('./admin_model');

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
        ref : Apartment,
        index: true
    },
    registered_by :{
        type: mongoose.Schema.Types.ObjectId,
        ref: Admin,
        index: true
    }    
})
/// check on password
// agent_schema.pre('save',async function(){
//     try {
//         const agent = this
//         if(!agent.isModified(password)) {
//             return next()
//         }
//         const salt = await bcrypt.genSalt(10)

//         const hashedpassword = await bcrypt.hash(this.password, salt)
//         this.password = hashedpassword
//         return next()
        
//     } catch (error) {
//         return next(error)
        
//     }
// })

const Agent = mongoose.model('Agent', agent_schema);
module.exports = Agent;