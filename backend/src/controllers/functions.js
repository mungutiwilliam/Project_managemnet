const Unit = require('../models/unit_model');
const Tenant = require('../models/tenant_model');
const Payment = require('../models/payment_model');
const Apartment = require('../models/apartment_model');
const Agent = require('../models/agent_model');
const Admin = require('../models/admin_model');
const {SECRET} = require('../config/index');
const jwt = require('jsonwebtoken')

//const auth = passport.authenticate("jwt", {session : false});

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

const generateToken = function(user){
    let token = jwt.sign({
            user_id: user._id,
            role: user.role,
            user_email: user.email
        }, SECRET, {expiresIn: "30 min"})
       return {token}
}


const valTokkenfetchUser = async function (req, res, next){
        if (req.headers && req.headers.authorization) {
            let authorization = req.headers.authorization
            let decoded

            console.log(req.headers)
            console.log(authorization)
            try{
                decoded = jwt.verify(authorization,SECRET)
                console.log(decoded)
            }catch(err){

                return res.status(401).send("Tokken not valid") 
            }
            let useremail = decoded.email
            console.log(decoded)
            try {
                const admin =  await Admin.findOne({email:useremail})
                    {
                        if(!admin){
                            next()
                            return admin
                            

                        }else 
                        {
                            reject("No token found")
                        }
                        
                    
                }
            } catch (error) {
                console.log (error)
                return res.status(501).send(error)
            }
 }
}




module.exports = {
    valTokkenfetchUser,
    validateEmail,
    checkRole,
    generateToken
}

