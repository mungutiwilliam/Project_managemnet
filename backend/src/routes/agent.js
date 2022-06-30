const express = require('express');
const router = express.Router();


router.post('/log_in', function(req, res){
    await logInAgent(req, res)
})

router.get('/details', function(req, res){
    await viewProfile(req, res)

})
router.get('/payment history', function(req, res){
    await viewPayments(req, res)

})

router.get('/tenants', function (req, res){

})

router.get('/apartments', function (req, res){

})

router.get('/payments', function (req, res){

})

router.get('/tenants/tenant/:id', function (req, res){

})

router.post('/register/tenant', function (req, res){

})

module.exports = router