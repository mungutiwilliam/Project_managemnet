const Unit = require('../../../models/unit_model');
const Payment = require('../../../models/payment_model');
const Apartment = require('../../../models/apartment_model');
const User = require('../../../models/user_model');





const viewAllTenants = async function(req, res) {
    try {
        const tenants = await User.find({}, )
        let total = await User.find().count()
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
        console.log(units)
        return res.status(200).send(units)
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
        const agents = await User.find({})
        const total = await User.find().count()
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
        const admins = await User.find({})
        console.log(admins)
        return res.status(200).send({admins})

    }catch(error){
        console.log(error)
        return res.status(500).send(error)
    }
}

const viewAllTenantPayments = async function(id, res){

}



const findAgent = async function(agent_id, res) {
    try{
        const agent = await User.findById(agent_id)
       
        return res.status(200).send(agent)
    }catch(error){
        console.log(error)
        return res.status(500).send(error)
    }
}



const findTenant = async function(tenant_id, res) {
    try{
        const tenant = await User.findById(tenant_id)

        return res.status(200).send(tenant)
    }catch(error){
        console.log(error)
        return res.status(500).send(error)
    }
}



const findUnit = async function(unit_id, res) {
    try{
        const unit = await Unit.findById(unit_id)

        return res.status(200).send(unit)
    }catch(error){
        console.log(error)
        return res.status(500).send(error)
    }
}




const findApartment = async function(id,res){
    try {
        const apartment = await Apartment.findById({_id:id})
        if(!apartment ){
            return res.status(404).send({
                message:'Apartment does not exist'
            })  
        }
        return res.status(200).send({
            apartment  
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
        
    }
}




const findUnitOfTenant = async function(req, res,id,next) {
    try{
        let id = req.params.id
        const unit = User.find({unit_id:id}).populate('unit_id')
        res.status(200).send(unit)

    }
    catch(error){
        console.log(error)
        return res.status(500).send(error)

    }
}

const findApartmentRegistered = async function(id, res){
    try{
        const agent = await Apartment.find({_id:id},{name:1, city:1, agents:1})
        if(!agent){
            return res.status(404).send({
                message:'Does not exist'
            })  
        }
        return res.status(200).send({
            agent
        })

    }
    catch(error){
        console.log(error)
        return res.status(500).send(error)
    }
}

const findAdmin = async function(id,res){
    try {
        const admin = await User.find({_id:id},{first_name:1,last_name:1, email:1, phone_number:1})
        if(!admin){
            return res.status(404).send({
                message:'Does not exist'
            })  
        }
        return res.status(200).send({
            admin 
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
        
    }
}



const paymentHistory = async function(id, res) {
    try {
        const tenant_payments = await User.find({id},{payment:1})
        if(!tenant_payments){
            return res.status(404).send({
                message:'Does not exist'
            })  
        }else if(tenant_payments==null){
            return res.status(404).send({message:'No payments Found for Tenant'})
        }
        return res.status(200).send({
            tenant_payments 
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
        
    }


}



const findTenantAgent= async function(req, res, next) {
    
}



const  findTenantApartment = async function(req, res, next) {

}



const findAllApartmentdetails = async function(req, res, next) {

}



const viewTenantUnit = async function(req, res, next) {


}

module.exports = {
    //viewAgentsRegisteredByAdmin,
    viewAllTenantPayments,
    viewAllTenants,
    viewAllApartments,
    viewAllPayments,
    viewAllAgents,
    viewAllAdmins,
    viewAllUnits,
    findAgent,
    findTenant,
    findApartment,
    findUnit,
    findUnitOfTenant,
    findAdmin,
    paymentHistory
}