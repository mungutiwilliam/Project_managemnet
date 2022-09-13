const express = require('express');
const router = express.Router();

const {

    deleteUser,
    deleteApartment, 
    deletePayment, 
    deleteUnit,
} = require('../../controllers/database_functions/delete/delete')


const {

    updateAdmin,
    updateApartment
} = require('../../controllers/database_functions/patch/patch')

const {

    registerAgent,
    registerApartment,
    registerAdmin,
    loginUser
 } = require('../../controllers/database_functions/post/post')


 const {
    viewAgentsRegisteredByAdmin,
    viewAllApartments,
    viewAllPayments,
    viewAllTenants,
    viewAllAgents,
    viewAllUnits,
    viewAllAdmins,
    findApartment,
    findAgent,
    findAdmin
} = require('../../controllers/database_functions/get/get')



router.get('/agents', async function (req, res){

    await viewAllAgents(req, res);
})

router.get('/tenants', async function (req, res){

    await viewAllTenants(req, res);
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


router.get('/units',async function (req, res){

    await viewAllUnits(req.body, res);
})



router.get('/apartment_agent/',async function (req, res){

    await findApartmentRegistered(req.body, res);
})


router.get('/agent/:id',async function (req, res){

    await viewAgent(req.body, res);
})


router.get('/unit/:id',async function (req, res){

    await viewUnit(req.body, res);

})

router.post('/login_user', async function (req, res){

    await loginUser(req, res);
})


router.post('/register_agent', async function (req, res){

    await registerAgent(req.body, res);
})


router.post('/register_admin',async function (req, res){

    await registerAdmin(req.body, res);
})



router.post('/register_Apartment', async function (req, res){

    await registerApartment(req.body, res);
})



router.delete('/delete_user/', async function(req, res){

    await deleteUser(req.body, res);
})


router.delete('/delete_apartment/', async function(req, res){

    await deleteApartment(req.body, res);
})



router.delete('/delete_payment/', async function(req, res){

    await deletePayment(req.body, res);
    
})



router.delete('/delete_unit/', async function(req, res){

    await deleteUnit(req.body, res);
})



router.get('/find_apartment/', async function (req, res){

    await findApartment(req.body, res) 
})



router.get('/find_admin/', async function (req, res){

    await findAdmin(req.body, res) 
})



router.get('/find_agent', async function (req, res){

    await findAgent(req.body, res) 
})



// view agents registered by admin
router.get('/view_Agents_registered_agent/', async function (req, res){

    await viewAgentsRegisteredByAdmin()
})



router.patch('/update_apartment/',async function(req, res){

    await updateApartment(req, res);
})



// view tenants registered under agent
router.get('/view_tenants_under_agent/', async function (req, res){

    await viewTenantAgent(req, res);
})



router.patch('/update_admin/', async function(req, res){

    await updateAdmin(req, res);
})

module.exports = router