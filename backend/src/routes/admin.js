const express = require('express');
const router = express.Router();

const {viewAllTenants,
    viewAllApartments,
    viewAllPayments,
    viewAllAgents,
    viewAllUnits,
    viewAdmins,
    viewAgent,
    viewTenant,
    deleteAgent,
    deleteTenant, 
    deleteApartment, 
    deletePayment, 
    deleteAdmin,
    viewApartment,
    viewUnit,
    registerUnit,
    registerAgent,
    registerTenant,
    registerAdmin,
    registerApartment} = require('../controllers/database_functions')


router.get('/tenants', async function (req, res){
    await viewAllTenants(req.body, res);
})

router.get('/agents', async function (req, res){
    await viewAllAgents(req.body, res);
})
router.get('/admins', async function (req, res){
    await viewAdmins(req.body, res);
})

router.get('/apartments',async function (req, res){
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

router.get('/tenants/tenant/:id',async function (req, res){
    await viewTenant(req.params.id, res);

})

router.get('/apartments/apartment/:id',async function (req, res){
    await viewApartment(req.params.id, res);

})

router.get('/units/unit/:id',async function (req, res){
    await viewUnit(req.params.id, res);

})

router.post('/register_agent',async function (req, res){
    await registerAgent(req.body, res);
})
router.post('/register_unit', async function (req, res){
    await registerUnit(req.body, res);
})

router.post('/register_admin', async function (req, res){
    await registerAdmin(req.body, res);
})

router.post('/register_tenant',async function (req, res){
    await registerTenant(req.body, res);
})

router.post('/register_super_admin',async function (req, res){
    await registerSuperAdmin(req.body, res);
})

router.post('/register_Apartment', async function (req, res){
    await registerApartment(req.body, res);
})

router.delete('/delete_agent/:id', async function(req, res){
    await deleteAgent(req.params.id, res);
})

router.delete('/delete_tenant/:id', async function(req, res){
    await deleteTenant(req.params.id, res);
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




module.exports = router