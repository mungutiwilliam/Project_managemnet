const Unit = require('../models/unit_model');
const Tenant = require('../models/tenant_model');
const Payment = require('../models/payment_model');
const Apartment = require('../models/apartment_model');
const Agent = require('../models/agent_model');
const Admin = require('../models/admin_model');


const viewAllTenants = async function(req, res) {
    try {
        const tenants = await Tenant.find({})
        return res.status(200).send({
            tenants
        })
}
        
     catch (error) {
        console.log(error)
        return res.status(500).send(error)
 }
}
    
const viewAllUnits = async (_, res) => {
    try {
        const units = await Unit.find({})
        console.log(units)
        return res.status(200).send(units)
    } catch (error) {
        return res.status(500).send(error)
        
    }
}

const viewAllPayments = async function(req, res) {
    try{
        const payments = Payment.find({})
        return res.status(200).send({
            payments
        })

    }catch(error){
        console.log(error)
        return res.status(500).send(error)
    }
   
}

const viewAllApartments = async function(req, res){
    try{
        const apartments = await Apartment.find({})
        return res.status(200).send({
            apartments
        })

    }catch(error){
        console.log(error)
        return res.status(500).send(error)

    }

}

const viewAllAgents = async function(req, res){
    try{
        const agents = await Agent.find({})
        return res.status(200).send({
            agents
        })

    }catch(error){
        console.log(error)
        return res.status(500).send(error)

    }

}

const viewAgent = async function(agent_id, res) {
    try{
        const agent = await Agent.findById(agent_id)
        return res.status(200).send(agent)
    }catch(error){
        console.log(error)
        return res.status(500).send(error)
    }
}

const viewTenant = async function(tenant_id, res) {
    try{
        const tenant = await Tenant.findById(tenant_id)
        return res.status(200).send(tenant)
    }catch(error){
        console.log(error)
        return res.status(500).send(error)
    }
}

const viewApartment = async function(apartment_id, res) {
    try{
        const agent = await Agent.findById(apartment_id)
        return res.status(200).send(agent)
    }catch(error){
        console.log(error)
        return res.status(500).send(error)
    }
}


const viewUnit = async function(unit_id, res) {
    try{
        const unit = await Unit.findById(unit_id)
        return res.status(200).send(unit)
    }catch(error){
        console.log(error)
        return res.status(500).send(error)
    }
}

const viewAdmins = async function(req, res) {
    try{
        const admins = await Admin.find({})
        console.log(admins)
        return res.status(200).send(admins)

    }catch(error){
        console.log(error)
        return res.status(500).send(error)
    }
}


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


const deleteAgent = async function(id,res){
    try {
        const agent = await Agent.findByIdAndDelete(id)
        if(!agent ){
            return res.status(404).send({
                message:'The Agent does not exist'
            }) 
        }
        return res.status(200).send({
            agent,
            message: 'Agent has been deleted'
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
        
    }
}
const deleteTenant = async function(id,res){
    try {
        const tenant = await Tenant.findByIdAndDelete(id)
        if(!tenant ){
            return res.status(404).send({
                message:'The tenant does not exist'
            })  
        }
        return res.status(200).send({
            tenant,
            message: 'Tenant has been deleted'
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
        
    }
}

const deleteApartment = async function(id,res){
    try {
        const apartment = await Apartment.findByIdAndDelete(id)
        if(!apartment ){
            return res.status(404).send({
                message:'The Apartment does not exist'
            })  

        }
        console.log(apartment)
        return res.status(200).send({
            apartment,
            message: 'Apartment has been deleted'
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
        
    }
}



const deletePayment = async function(id,res){
    try {
        const payment = await Payment.findByIdAndDelete(id,res)
        if(!payment){
            return res.status(404).send({
                message:'The payment does not exist'
            }) 

        } 
        console.log(payment)
        return res.status(200).send({
            payment,
            message: 'Payment has been deleted'
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)   
    }
}


const deleteAdmin = async function(id,res){
    try {
        const admin = await Admin.findByIdAndDelete(id,res)
        if(!admin){
            return res.status(404).send({
                message:'The admin does not exist'
            })  

        }  return res.status(200).send({
            admin,
            message: 'Payment has been deleted'
        })
      
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)   
    }
}


module.exports = {
    viewAllTenants,
    viewAllApartments,
    viewAllPayments,
    viewAllAgents,
    viewAllUnits,
    viewAgent,
    viewTenant,
    viewApartment,
    viewUnit,
    viewAdmins,
    registerAgent,
    registerTenant,
    registerAdmin,
    registerUnit,
    registerApartment,
    deleteAgent,
    deleteTenant, 
    deleteApartment, 
    deletePayment, 
    deleteAdmin
}