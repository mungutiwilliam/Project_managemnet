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
        default:'admin',
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

// admin_schema.pre('save', async function(password,next){
//     try {
//         const admin = this
//         if (!admin.isModified(password)) next();
//         // generate salt 

//         const salt = await bcrypt.genSalt(10)
//         // hash password
//         const hashedpassword = await bcyrpt.hash(this.password, salt)
//         // replace plain text password with hashed password
//         this.password = hashedpassword
//         next();
        
//     } catch (error) {
//         return next(error);
//     }
// })

// admin_schema.methods.comparepassword = function(passw, cb){
//     bcyrpt.compare(passw, this.password, function (err, isMatch){
//         if (err){
//             return cb(err);
//         }
//         cb(null, isMatch);
//     })
// }

const User = mongoose.model('User', user_schema);

module.exports = User;