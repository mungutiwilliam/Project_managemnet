// const Tenant = require('../../src/models/tenant_model');
// const Admin = require('../../src/models/admin_model');
// const Agent = require('../../src/models/agent_model')
// const {SECRET} = require('../config/index');
// const passport = require('passport')
// const Strategy = require('passport-jwt').Strategy,
//     ExtractJwt = require('passport-jwt').ExtractJwt;


    

// module.exports = function (passport){

//     var options = {}
//     options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
//     options.secretOrKey = SECRET

//     passport.use( new Strategy(options, function(jwt_payload, done){
//         Tenant.findOne({id: jwt_payload.id}, function(err, tenant){
//             if(err){
//                 return done(err, false)
//             }
//             if(tenant){
//                 done(null, tenant)
//             } else {
//                 done(null, false)
//             }
//         })
//     }))

//     passport.use( new Strategy(options, function(jwt_payload, done){
//         Admin.findOne({id: jwt_payload.id}, function(err, admin){
//             if(err){
//                 return done(err, false)
//             }
//             if(admin){
//                 done(null, admin)
//             } else {
//                 done(null, false)
//             }
//         })
//     }))

//     passport.use( new Strategy(options, function(jwt_payload, done){
//         Agent.findOne({id: jwt_payload.id}, function(err, agent){
//             if(err){
//                 return done(err, false)
//             }
//             if(agent){
//                 done(null, agent)
//             } else {
//                 done(null, false)
//             }
//         })
//     }))
// }