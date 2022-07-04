const express = require('express');
const router = express.Router();
var passport = require('passport');
require('../middleware/passport')(passport);

const {auth } = require('../controllers/functions')



router.post('/log_in', async function(req, res){
    await logInAgent(req, res)
})

router.get('/details:id',async function(req, res){
    await viewProfile(req.params.id, res)

})
router.get('/tenant_payment_history',async function(req, res){
    await viewPayments(req, res)

})

router.get('/tenants',async function (req, res){

})

router.get('/apartments',async function (req, res){

})

router.get('/apartments/apartments/:id',async function (req, res){

})


router.get('/payments',async function (req, res){

})

router.get('/payments/payment/:id',async function (req, res){

})

router.get('/tenants/tenant/:id',async function (req, res){

})

router.post('/register/tenant',async function (req, res){

})

module.exports = router