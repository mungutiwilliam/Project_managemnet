const mongoose = require('mongoose');


const admin_schema  = new mongoose.Schema({
    First_Name:{
        type: String,
        required: true
    },
    Last_name:{
        type: String,
        required: true
    },
    Email : {

    },
    passwords:{

    },
})

const Admin = mongoos.model('Admin', admin_schema);
module,exports = Admin;