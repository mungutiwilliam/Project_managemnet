const express = require('express');
const router = express.Router();

const {
    deleteUser
} = require('../../controllers/database_functions/delete/delete')

const {
    registerUnit,
 } = require('../../controllers/database_functions/post/post')

 const {
    updateTenant
} = require('../../controllers/database_functions/patch/patch')

 const {
    viewAllTenants,
    viewAllUnits,
    viewAllTenantPayments,
    findTenant,
} = require('../../controllers/database_functions/get/get')





router.get('/tenants', async function (req, res){
    console.log(req)
    await viewAllTenants(req, res);
})

router.get('/units',async function (req, res){
    await viewAllUnits(req.body, res);
})

router.get('/tenant_payments/:id',async function (req, res){
    await viewAllTenantPayments(req.body, res);
})


router.get('/find_tenant/:id', async function (req, res){
    await findTenant(req.params.id, res) 
})


router.post('/register_unit', async function (req, res){
    await registerUnit(req.body, res);
})


router.delete('/delete_tenant/:id', async function(req, res){
    // should be req.body not parameter 
    await deleteUser(req.params.id, res);
})

router.patch('/update_tenant/:id',async function(req, res){
    await updateTenant(req, res);
})


module.exports = router
