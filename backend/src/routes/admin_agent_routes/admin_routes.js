const express = require('express');
const router = express.Router();

const {
    deleteAgent,
    deleteApartment, 
    deletePayment, 
    deleteAdmin,
    deleteUnit,
    
} = require('../../controllers/database_functions/delete/delete')


const {
    updateAdmin,
    updateApartment
} = require('../../controllers/database_functions/patch/patch')

const {
    registerAgent,
    registerApartment,
    registerTenant,
    registerAdmin,
 } = require('../../controllers/database_functions/post/post')

 const {
    viewAgentsRegisteredByAdmin,
    viewAllApartments,
    viewAllPayments,
    viewAllAgents,
    viewAllAdmins,
    findApartment,
    findAgent,
    findAdmin
} = require('../../controllers/database_functions/get/get')



router.get('/agents', async function (req, res){
    await viewAllAgents(req, res);

})



router.get('/admins', async function (req, res){
    await viewAllAdmins(req, res);
})


router.get('/apartments',async function (req, res){
    await viewAllApartments(req.body, res);
})


router.get('/payments',async function (req, res){
    await viewAllPayments(req.body, res);
})


router.get('/tenant_payments/:id',async function (req, res){
    await viewAllTenantPayments(req.body, res);
})

router.get('/apartment_agent/:id',async function (req, res){
    await findApartmentRegistered(req.body, res);
})


router.get('/agents/agent/:id',async function (req, res){
    await viewAgent(req.params.id, res);
})


router.get('/units/unit/:id',async function (req, res){
    await viewUnit(req.params.id, res);

})

router.post('/login_admin', async function (req, res){
    await loginAdmin(req, res);
})

router.post('/login_tenant', async function (req, res){
    await loginTenant(req, res);
})

router.post('/login_agent', async function (req, res){
    await loginAgent(req, res);
})


router.post('/register_agent', async function (req, res){
    await registerAgent(req.body, res);
})


router.post('/register_tenant',async function (req, res){
    await registerTenant(req.body, res);
})



router.post('/register_admin',async function (req, res){
    await registerAdmin(req.body, res);
})



router.delete('/delete_agent/:id', async function(req, res){
    await deleteAgent(req.params.id, res);
})



router.delete('/delete_admin/:id', async function(req, res){
    await deleteAdmin(req.params.id, res);
})



router.delete('/delete_apartment/:id', async function(req, res){
    await deleteApartment(req.params.id, res);
})



router.delete('/delete_payment/:id', async function(req, res){
    await deletePayment(req.params.id, res);
    
})



router.delete('/delete_unit/:id', async function(req, res){
    await deleteUnit(req.params.id, res);
})



router.get('/find_apartment/:id', async function (req, res){
    await findApartment(req.params.id, res) 
})



router.get('/find_admin/:id', async function (req, res){
    await findAdmin(req.params.id, res) 
})



router.get('/find_agent/:id', async function (req, res){
    await findAgent(req.params.id, res) 
})



// view agents registered by admin
router.get('/view_Agents_registered_agent/:id', async function (req, res){
    await viewAgentsRegisteredByAdmin()
})




router.patch('/update_apartment/:id',async function(req, res){
    await updateApartment(req, res);
})




router.post('/register_Apartment', async function (req, res){
    await registerApartment(req.body, res);
})




// view tenants registered under agent
router.get('/view_tenants_under_agent/:id', async function (req, res){
    await viewTenantAgent(req, res);
})



router.patch('/update_admin/:id', async function(req, res){
    await updateAdmin(req, res);

})





module.exports = router