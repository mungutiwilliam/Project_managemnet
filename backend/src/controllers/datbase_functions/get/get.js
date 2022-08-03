const Unit = require('../../../models/unit_model');
const Tenant = require('../../../models/tenant_model');
const Payment = require('../../../models/payment_model');
const Apartment = require('../../../models/apartment_model');
const Agent = require('../../../models/agent_model');
const Admin = require('../../../models/admin_model');

const viewAllTenants = async function(req, res) {
    try {
        const tenants = await Tenant.find({})
        let total = await Tenant.find().count()
        return res.status(200).send({
            tenants,
            total
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
        let total = await Unit.find().count()
        console.log(units)
        return res.status(200).send(units,
            total)
    } catch (error) {
        return res.status(500).send(error)
        
    }
}

const viewAllPayments = async function(req, res) {
    try{
        const payments = await Payment.find({})
        let total = await Payment.find().count()
        return res.status(200).send({
            payments,
            total
        })

    }catch(error){
        console.log(error)
        return res.status(500).send(error)
    }
   
}

const viewAllApartments = async function(req, res){
    try{

        
        const apartments = await Apartment.find({})
        let total = await Apartment.find().count()
        return res.status(200).send({
            apartments,
            total
        })
    }catch(error){
        console.log(error)
        return res.status(500).send(error)

    }

}

const viewAllAgents = async function(req, res){
    try{
        const agents = await Agent.find({})
        const total = await Agent.find().count()
        return res.status(200).send({
            agents,
            total
        })

    }catch(error){
        console.log(error)
        return res.status(500).send(error)

    }

}
const viewAllAdmins = async function(req, res) {
    try{
        const admins = await Admin.find({})
        let total = await Admin.find().count()
        console.log(admins)
        console.log(total)
        return res.status(200).send({
            admins,
            total})

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



const viewUnitOfTenant = async function(req, res,id,next) {
    try{
        let id = req.params.id
        const unit = Tenant.find({unit_id:id}).populate('unit_id')
        res.status(200).send(unit)

    }
    catch(error){
        console.log(error)
        return res.status(500).send(error)

    }

}

const viewAllTenantPayments= async function(req, res, next) {

}

const viewTenantAgent= async function(req, res, next) {
    
}

const  viewtenantApartment = async function(req, res, next) {

}


const viewAllApartmentdetails = async function(req, res, next) {

}

const viewTenantUnit = async function(req, res, next) {

}


module.exports = {
    viewAllTenants,
    viewAllApartments,
    viewAllPayments,
    viewAllAgents,
    viewAllAdmins,
    viewAllUnits,
    viewAgent,
    viewTenant,
    viewApartment,
    viewUnit,
    viewUnitOfTenant
}