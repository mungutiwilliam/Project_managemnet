const Unit = require('../../../models/unit_model');
const Tenant = require('../../../models/tenant_model');
const Payment = require('../../../models/payment_model');
const Apartment = require('../../../models/apartment_model');
const Agent = require('../../../models/agent_model');
const Admin = require('../../../models/admin_model');

const {validateTokken,
    validateEmail,
    checkRole,
    generateToken} = require('../../functions')

const registerAgent = async function(agent_details, res){
    try{
        const agent = new Agent(agent_details)
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

const registerTenant = async function(agent_details, res){
    try{
        const tenant = new Tenant(agent_details)
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
        const admin = new Admin(admin_dets)
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

const addPayment = async function(payment_dets, res){
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
        let  agent_id = req.params._id
        let apartment = req.body._id
        const agent = Agent.findById(agent_id)
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

module.exports = {
    registerAgent,
    registerTenant,
    registerAdmin,
    registerUnit,
    registerApartment,
    addPayment,
    vviewApartmentAgent  
}