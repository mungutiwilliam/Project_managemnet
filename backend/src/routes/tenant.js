const express = require('express');
const router = express.Router();
// var passport = require('passport');
// require('../middleware/passport')(passport);

router.post('/log_in',async function(req, res){
    await logInTenant(req, res)
})



module.exports = router