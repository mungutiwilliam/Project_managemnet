const Unit = require('../../../models/unit_model');
const Tenant = require('../../../models/tenant_model');
const Payment = require('../../../models/payment_model');
const Apartment = require('../../../models/apartment_model');
const Agent = require('../../../models/agent_model');
const Admin = require('../../../models/admin_model');

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
}