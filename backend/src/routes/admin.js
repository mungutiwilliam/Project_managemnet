const express = require('express');
const router = express.Router();

router.get('/', function (req, res){

})

router.get('/tenants', async function (req, res){
    await viewAllTenants(req, res);
})
router.get('/apartments', function (req, res){
    await viewAllApartments(req, res);
})


router.get('/payments', function (req, res){
    await viewAllPayments(req, res);
})

router.get('/agents/agent/:id', function (req, res){
    await viewAgent(req.params.id, res);
})

router.get('/tenants/tenant/:id', function (req, res){
    await viewTenant(req.params.id, res);

})

router.get('/apartments/apartment/:id', function (req, res){
    await viewApartment(req.params.id, res);

})

router.get('/units/unit/:id', function (req, res){
    await viewUnit(req.params.id, res);

})

router.post('/register/agent', function (req, res){
    await registerAgent(req, res);
})

router.post('/register/tenant', function (req, res){
    await registerTenant(req, res);
})

router.post('/register/super_admin', function (req, res){
    await registerTenant(req, res);
})


module.exports = router