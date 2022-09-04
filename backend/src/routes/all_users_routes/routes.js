const express = require('express');
const router = express.Router();

const {
    viewUnit,
    viewProfile,
    paymentsByTenant,

} = require('../../controllers/database_functions/get/get')


const {
    flagIssue,
    makePayment,
    loginUser
} = require('../../controllers/database_functions/post/post')

const {

    updateTenant

} = require('../../controllers/database_functions/patch/patch')



router.get('/details/:id',async function(req, res){
    await viewProfile(req, res)

})

router.get('/paymentHistory/:id ',async function(req, res){
    await paymentsByTenant(req.params.id, res)

})


router.get('/units/unit/:id',async function (req, res){
    await viewUnit(req.params.id, res);

})


router.post('/issue',async function(req, res){
    await flagIssue(req, res)
})


router.post('/add_payment', async function(req, res){
    await makePayment(req.body, res)
})


router.post('/login_admin', async function (req, res){
    await loginUser(req, res);
})


router.patch('/update_tenant/:id',async function(req, res){
    await updateTenant(req, res);
})





module.exports = router
