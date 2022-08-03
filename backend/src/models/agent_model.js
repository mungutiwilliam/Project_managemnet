const mongoose = require('mongoose');


const agent_schema = new mongoose.Schema({
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
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role : {
        type : String,
        default:'agent',
        required: true
    },
    phone_number:{
        type: String,
        unique: true,
        required: true
    },
    apartment:[{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Apartment',
        required: false,
        index: true
    }],
    registered_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: true,
        index: true
    },
    tenant:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tenant',
        required: false,
        index: true
    }]  
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