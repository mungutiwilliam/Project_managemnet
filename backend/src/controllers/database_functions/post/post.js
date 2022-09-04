const Unit = require('../../../models/unit_model');
const User = require('../../../models/user_model');
const Payment = require('../../../models/payment_model');
const Apartment = require('../../../models/apartment_model');
const Issue = require('../../../models/issues_mode')
const bcrypt = require ('bcrypt');
const saltRounds = 10

const {validateTokken,
    validateEmail,
    checkRole,
    generateToken} = require('../../helper_functions')

const registerAgent = async function(agent_details, res){
    try{
        const hashedpassword = await bcrypt.hash(agent_details.password, saltRounds)
        const agent = new User({
            ...agent_details,
            password:hashedpassword})

        await agent.save()
        console.log(agent)
        return res.status(200).send({
            agent,
            message: 'New Agent has been added'
        })
    }catch(error){
        console.log(error)
        return res.status(500).send(error)

    }
}

const registerTenant = async function(tenant_details, res){
    try{
        const hashedpassword = await bcrypt.hash(tenant_details.password, saltRounds)
        const tenant = new User({
             ...tenant_details,
             password: hashedpassword})
        await tenant.save()
        console.log(tenant)
        return res.status(200).send({
            tenant,
            message: 'New Tenant has been added'
        })
    }catch(error){
        console.log(error)
        return res.status(500).send(error)

    }
}

const registerAdmin = async function(admin_dets, res){
    try {
        const hashedpassword = await bcrypt.hash(admin_dets.password, saltRounds)
        const admin = new User({
            ...admin_dets,
             password: hashedpassword})

        await admin.save()
        console.log(admin)
        return res.status(200).send({
            admin,
            message: 'New Admin has ben added'
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)  
    }
}

const registerUnit = async function (unit_details, res){
    try {
        const unit = new Unit(unit_details, res)
        await unit.save()
        return res.status(200).send({
            unit, 
            message: 'New Unit Registered'
        })  
    } catch (error) {
        return res.status(200).send(error)
    }
}

const registerApartment = async function(apartment_details, res){
    try{
        const apartment = new Apartment(apartment_details)
        await apartment.save()
        console.log(apartment)
        return res.status(200).send({
            apartment,
            message: 'New Apartment has been registered'
        })

    }catch(error){
        console.log(error)
        return res.status(500).send(error)
    }
}

const makePayment = async function(payment_dets, res){
    try {
        const payment = new Payment({payment_dets})
        await payment.save()
        console.log(payment)
        return res.status(200).send({
            payment,
            message: 'Payment has been added to records'
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}

const vviewApartmentAgent = async function(req, res, next) {
    try {
        // let  agent_id = req.params._id
        // let apartment = req.body._id
        // const agent = Agent.findById(agent_id)
        let pipeline = [
            {
                "$lookup": {
                    "from": "agents",
                    "localField": "$agent",
                    "foreignField": "$_id",
                    "as": "Agent who is in charge"
                }
            }
        ];
        
        var cursor = await Apartment.aggregate(pipeline);

        for(item in cursor){
            item +=1
            return res.status(200).send(item)
          
        }  
    }
            
     catch (error) {
        console.log(error)    
    }

}

const loginUser = async function(req, res){

    try {
        let {email, password} = req.body 

        console.log(email)
        console.log(password)

        const user = await User.findOne({email})
        console.log(user)
        
        if (user){
            const comp = bcrypt.compare(password, user.password)
            if (comp){
                //// check token generation 
                let token = generateToken(user)
                return res.send({
                    message: `Welcome ${user.first_name}, you have been logged as ${user.role} `,
                    token
        })
            } else {
                return res.send({message:"Wrong Email or Password"});
              }
            } else {
                return res.send("Wrong Username or Password");
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message :"Internal Server error Occured",
            error: error});   
    }
}



module.exports = {
    registerAgent,
    registerTenant,
    registerAdmin,
    registerUnit,
    registerApartment,
    vviewApartmentAgent,
    loginUser,
    flagIssue,
    makePayment 

}