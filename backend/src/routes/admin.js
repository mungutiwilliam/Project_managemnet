const express = require('express');
const router = express.Router();
// var passport = require('passport');
// require('../middleware/passport')(passport);

const {valTokkenfetchUser} = require('../controllers/functions')


const {
    deleteAgent,
    deleteApartment, 
    deletePayment, 
    deleteAdmin,
    deleteTenant,
    deleteUnit
} = require('../controllers/datbase_functions/delete/delete')
const {
    updateAdmin,
    updateApartment,
    updateTenant
} = require('../controllers/datbase_functions/patch/patch')

const {viewAllTenants,
    viewAllApartments,
    viewAllPayments,
    viewAllAgents,
    viewAllUnits,
    viewAgent,
    viewAllAdmins,
    viewUnit,
    viewUnitOfTenant,
    vviewApartmentAgent
} = require('../controllers/datbase_functions/get/get')

const {
    registerAgent,
    registerApartment,
    addPayment, 
    registerTenant,
    registerAdmin,
    registerUnit,
    loginAdmin,
    loginTenant,
    loginAgent, 
    
 } = require('../controllers/datbase_functions/post/post')


 


router.get('/tenants', valTokkenfetchUser, async function (req, res){
    console.log(req)
    await viewAllTenants(req, res);
})

router.get('/agents',valTokkenfetchUser, async function (req, res){
    await viewAllAgents(req, res);

})
router.get('/admins',valTokkenfetchUser, async function (req, res){
    await viewAllAdmins(req, res);
})

router.get('/apartments',valTokkenfetchUser,async function (req, res){
    await viewAllApartments(req.body, res);
})

router.get('/units',async function (req, res){
    await viewAllUnits(req.body, res);
})


router.get('/payments',async function (req, res){
    await viewAllPayments(req.body, res);
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
router.post('/register_unit', async function (req, res){
    await registerUnit(req.body, res);
})


router.post('/register_Apartment', async function (req, res){
    await registerApartment(req.body, res);
})

router.post('/add_payment', async function(req, res){
    await addPayment(req.body, res)
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

router.delete('/delete_tenant/:id', async function(req, res){
    await deleteTenant(req.params.id, res);
})


router.patch('/update_admin/:id', async function(req, res){
    await updateAdmin(req, res);

})

router.patch('/update_tenant/:id',async function(req, res){
    await updateTenant(req, res);
})

router.patch('/update_apartment/:id',async function(req, res){
    await updateApartment(req, res);
})


// view apartments registered under agent
router.get('/view_apartments_under_agent/:id', async function (req, res){
    await viewApartmentAgent(req, res);
})

// view tenants registered under agent
router.get('/view_tenants_under_agent/:id', async function (req, res){
    await vviewApartmentAgent(req, res);
})



// view agents registered by admin
router.get('/view_Agents_registered_agent/:id', async function (req, res){
    await viewAgentsRegisteredAdmin()
})


// // view 
// router.get('/view_', async function (req, res){
//     await   
// })



module.exports = router