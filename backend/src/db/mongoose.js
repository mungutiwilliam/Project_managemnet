 const mongoose = require('mongoose');
 const {DB}= require('../config/index')

 mongoose.connect(DB,
 {
    useNewUrlParser: true,
    useUnifiedTopology: true
 })