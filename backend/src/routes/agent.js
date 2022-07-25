const express = require('express');
const router = express.Router();
var passport = require('passport');
require('../middleware/passport')(passport);

const {auth} = require('../controllers/functions')

const {
    registerUnit,
    registerTenant,
    registerAdmin,
    } = require('../controllers/datbase_functions/post/post')


const {
    viewTenant,
    viewApartment,
    } = require('../controllers/datbase_functions/get/get')
    

const {
    deleteTenant, 
    deleteUnit,
    } = require('../controllers/datbase_functions/delete/delete')


const {
    deleteTenant, 
    deleteUnit
    } = require('../controllers/datbase_functions/delete/delete')

router.get('/details:id',async function(req, res){
    await viewProfile(req.params.id, res)

})
router.get('/tenant_payment_history',async function(req, res){
    await viewPayments(req, res)

})
router.get('/tenants/tenant/:id',async function (req, res){
    await viewTenant(req.params.id, res);

})

router.get('/apartments/apartment/:id',async function (req, res){
    await viewApartment(req.params.id, res);

})

router.post('/log_in', async function(req, res){
    await logInAgent(req, res)
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

router.delete('/delete_tenant/:id', async function(req, res){
    await deleteTenant(req.params.id, res);
})


router.delete('/delete_unit/:id', async function(req, res){
    await deleteUnit(req.params.id, res);
})

router.patch('/update_tenant/:id',async function(req, res){
    await updateTenant(req, res);
})

router.patch('/update_payment/:id', async function(req, res){
    await updatePayment(req, res);
})

router.patch('/update_agent/:id',async function(req, res){
    await updateAgent(req, res);

})


module.exports = router