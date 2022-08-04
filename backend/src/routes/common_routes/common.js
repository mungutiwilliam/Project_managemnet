const express = require('express');
const router = express.Router();
var passport = require('passport');
require('../middleware/passport')(passport);


router.get('/details/:id',async function(req, res){
    await viewProfile(req, res)

})

router.get('/paymentHistory/:id ',async function(req, res){
    await viewPayments(req.params.id, res)

})

router.post('/issue',async function(req, res){
    await flagIssue(req, res)
})



// view unit registered under a certain tenant
router.get('/view_unit_Tenant/:id/:id', async function(req, res){
    await viewUnitOfTenant(req, res);
})

// view payments by tenant
router.get('/view_Payments_by_tenanat/:id', async function (req, res){
    await paymentsByTenant(req, res);
})

router.patch('/update_tenant/:id',async function(req, res){
    await updateTenant(req, res);
})





module.exports = router
