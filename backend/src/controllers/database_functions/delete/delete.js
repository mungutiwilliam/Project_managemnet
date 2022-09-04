const Unit = require('../../../models/unit_model');
const Payment = require('../../../models/payment_model');
const Apartment = require('../../../models/apartment_model');
const User = require('../../../models/user_model');

const deleteUser = async function(id,res){
    try {
        const user = await User.findByIdAndDelete(id)
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
const deleteUnit = async function(id,res){
    try {
        const unit = await Unit.findByIdAndDelete(id,res)
        if(!unit){
            return res.status(404).send({
                message:'The unit does not exist'
            })  

        }  return res.status(200).send({
            unit,
            message: `Unit of ID = ${unit._id} of Tenant= ${unit.tenant} has been deleted`
        })
      
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)   
    }
}





module.exports = {
    deleteApartment, 
    deletePayment, 
    deleteUser,
    deleteUnit,
}