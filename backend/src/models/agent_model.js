const mongoose = require('mongoose');

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
        ref : 'Apartment'
    },
    tenant_registered:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tenant'
    }    
})

agent_schema.pre('save',async function(next){
    try {
        const agent = this
        if(!agent.isModified(password)) next()
        const salt = await bcrypt.genSalt(10)

        const hashedpassword = await bcrypt.hash(this.password, salt)
        this.password = hashedpassword
        next()
        
    } catch (error) {
        return next(error)
        
    }
})

const Agent = mongoose.model('Agent', agent_schema);
module.exports = Agent;