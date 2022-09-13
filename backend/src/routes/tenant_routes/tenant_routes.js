const express = require('express');
const router = express.Router();

const {
    viewUnit,
    viewProfile,
    paymentHistory,
} = require('../../controllers/database_functions/get/get')


const {
    flagIssue,
    makePayment,
    loginUser
} = require('../../controllers/database_functions/post/post')


const {

    updateProfile
} = require('../../controllers/database_functions/patch/patch')



router.get('/paymentHistory/:id ',async function(req, res){
    await paymentHistory(req.params.id, res)

})


router.get('/unit/:id',async function (req, res){

    await viewUnit(req.params.id, res);
})


router.post('/pay', async function(req, res){

    await makePayment(req.body, res)
})


router.post('/issue',async function(req, res){

    await flagIssue(req, res)
})



router.post('/login_user', async function (req, res){

    await loginUser(req, res);
})


router.get('/details/:id',async function(req, res){
    await viewProfile(req, res)

})


router.patch('/update_tenant/:id',async function(req, res){

    await updateProfile(req, res);
})


module.exports = router