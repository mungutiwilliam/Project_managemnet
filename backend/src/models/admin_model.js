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
    email:{
        type: String,
        required: true,
        index:true
    },
    role:{
        type : String,
        default:'admin',
        enum: ['admin', 'super-admin', 'tenant','agent']
    },
    password:{
        type: String,
        required: true
    },
    agent:[{
        type : mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    phone_numer: {
        type: String,
        unique: true
    }
   
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

const Admin = mongoose.model('Admin', admin_schema);

module.exports = Admin;