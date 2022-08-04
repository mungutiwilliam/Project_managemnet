const mongoose = require('mongoose');


const issues_schema = new mongoose.Schema({
    tenant:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tenant',
        index: true,
        required: true
    },
    issue_raised:{
        type: String,
        enum: ['Complains','Suggestions', 'repairs'],
        default: 'rent',
        required: true
    },
    desc:{
        type: String,
        required: true
       
    }
    
},{timestamps: true})

const Issues = mongoose.model('Issues', issues_schema);

module.exports = Issues;