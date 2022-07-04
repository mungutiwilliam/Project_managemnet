const Unit = require('../models/unit_model');
const Tenant = require('../models/tenant_model');
const Payment = require('../models/payment_model');
const Apartment = require('../models/apartment_model');
const Agent = require('../models/agent_model');
const Admin = require('../models/admin_model');


// const auth = passport.authenticate("jwt", {session : false});

const checkRole = role =>{
    if (role.name === "admin"){

    }
} 

const validateEmail = async email =>{
    let details = req.body
    if (role === "admin"){
        details = await Admin.findOne({email})
        if (!details){
            return false;
    
        }else return true;
    
    }else if (role === "agent"){
        details = await Agent.findOne({email})
        if (!details){
            return false;
    
        }else return true;

    }else {
        details = await Tenant.findOne({email})
        if (!details){
            return false;
    
        }else return true;


    }
}



const validateTokken = async function (req,res,next){
    
    var bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split('')
        const bearerToken = bearer[1]
        req.token = bearerToken
        next();
    }
    else{
        return res.status(401).send({
            message: 'You are not logged. Please log in'
        })
    }  
}

module.exports = {
    validateTokken,
    validateEmail,
    checkRole,
    // auth
}
