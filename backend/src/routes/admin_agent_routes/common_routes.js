const express = require('express');

const router = express.Router();


const {

    deleteTenant
} = require('../../controllers/database_functions/delete/delete')

const {

    loginUser,
    registerUnit,
    registerTenant
 } = require('../../controllers/database_functions/post/post')

 const {

    updateTenant
} = require('../../controllers/database_functions/patch/patch')

 const {

    viewAllTenantPayments,
    findTenant,
} = require('../../controllers/database_functions/get/get')



router.get('/tenant_payments/:id',async function (req, res){

    await viewAllTenantPayments(req.body, res);
})


router.get('/find_tenant/:id', async function (req, res){

    await findTenant(req.params.id, res) 
})


router.post('/register_unit', async function (req, res){

    await registerUnit(req.body, res);
})


router.post('/register_tenant',async function (req, res){

    await registerTenant(req.body, res);
})


router.delete('/delete_tenant/:id', async function(req, res){
   
    await deleteTenant(req.body, res);
})


router.patch('/update_tenant/:id', async function(req, res){
    await updateTenant(req, res);
})

router.post('/login_user', async function (req, res){

    await loginUser(req, res);
})



module.exports = router