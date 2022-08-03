// user model
const mongoose = require('mongoose');



const tenant_schema =  new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type : String,
        required: true 
    },
    email:{
        type : String,
        required: true 
    },
    phone_number:{
        type : String, 
         unique: true,
         required: true,},
    password:{
        type : String,
        required: true,
    },
    role:{
        type : String,
        default:'tenant',
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
    agent:{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Agent',
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


// tenant_schema.pre('save',async function(next){
//     try {
//         const tenant = this
//         if(!tenant.isModified(password)) next()
//         const salt = await bcrypt.genSalt(10)

//         const hashedpassword = await bcrypt.hash(this.password, salt)
//         this.password = hashedpassword
//         next()
        
//     } catch (error) {
//         return next(error)   
//     }
// })


const Tenant = mongoose.model('Tenant',tenant_schema);

module.exports = Tenant;
