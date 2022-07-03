const Unit = require('../../../models/unit_model');
const Tenant = require('../../../models/tenant_model');
const Payment = require('../../../models/payment_model');
const Apartment = require('../../../models/apartment_model');
const Agent = require('../../../models/agent_model');
const Admin = require('../../../models/admin_model');

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


const deleteUnit = async function(id,res){
    try {
        const unit = await Unit.findByIdAndDelete(id,res)
        if(!unit){
            return res.status(404).send({
                message:'The unit does not exist'
            })  

        }  return res.status(200).send({
            unit,
            message: 'Unit has been deleted'
        })
      
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)   
    }
}





module.exports = {
    deleteAgent,
    deleteTenant, 
    deleteApartment, 
    deletePayment, 
    deleteAdmin,
    deleteUnit,
}