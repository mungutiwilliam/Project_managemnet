const Unit = require('../../../models/unit_model');
const Tenant = require('../../../models/tenant_model');
const Payment = require('../../../models/payment_model');
const Apartment = require('../../../models/apartment_model');
const Agent = require('../../../models/agent_model');
const Admin = require('../../../models/admin_model');



const updatePayment = async function (req, res) {
    try {
        let changes = req.body
        let id = req.params.id

        const payment = await Payment.findByIdAndUpdate(changes,id,res)
        if(!payment){
            return res.status(404).send({
                message:'The payment does not exist'
            })  

        }  return res.status(200).send({
            ...payment,
            message: 'Payment has been updated'
        })
    
    } catch (error) {
        return res.status(500).send(error)
    }
}

const updateAgent = async function (req, res) {
    try {
        let changes = req.body
        let id = req.params.id
        const agent = await Agent.findByIdAndUpdate(id,changes,res)
        if(!agent){
            return res.status(404).send({
                message:'The agent does not exist'
            })  

        }  return res.status(200).send({
            ...agent,
            message: 'Agent has been updated'
        })
    
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}
const updateTenant = async function (req, res) {
    try {
        let changes = req.body
        let id = req.params.id
        const tenant = await Tenant.findByIdAndUpdate(id,changes,res)
        if(!tenant){
            return res.status(404).send({
                message:'The tenant does not exist'
            })  

        }  return res.status(200).send({
            ...tenant,
            message: 'Tenant has been updated'
        })
    
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}


const updateAdmin = async function (req, res) {
    try {
        let changes = req.body
        let id = req.params.id
        const admin = await Admin.findByIdAndUpdate(id,changes,res)
        if(!admin){
            return res.status(404).send({
                message:'The admin does not exist'
            })  

        }  return res.status(200).send({
            ...admin,
            message: 'Admin has been updated'
        })
    
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}

const updateApartment = async function (req, res) {
    try {
        let changes = req.body
        let id = req.params.id
        const apartment = await Apartment.findByIdAndUpdate(id,changes,res)
        if(!apartment){
            return res.status(404).send({
                message:'The apartment does not exist'
            })  

        }  return res.status(200).send({
            ...apartment,
            message: 'Admin has been updated'
        }) 
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}

module.exports = {
    updateAgent,
    updateTenant,
    updatePayment,
    updateAdmin,
    updateApartment,
}