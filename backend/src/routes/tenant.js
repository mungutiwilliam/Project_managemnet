const express = require('express');
const router = express.Router();


router.post('/log_in', function(req, res){
    await logInTenant(req, res)
})

router.get('/details', function(req, res){
    await viewProfile(req, res)

})
router.get('/payment history', function(req, res){
    await viewPayments(req, res)

})
router.post('/issue', function(req, res){
    await flagIssue(req, res)
})

module.exports = router