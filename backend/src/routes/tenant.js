const express = require('express');
const router = express.Router();


router.post('/log_in',async function(req, res){
    await logInTenant(req, res)
})

router.get('/details/:id',async function(req, res){
    await viewProfile(req, res)

})
router.get('/paymentHistory/:id ',async function(req, res){
    await viewPayments(req.params.id, res)

})
router.post('/issue',async function(req, res){
    await flagIssue(req, res)
})


module.exports = router