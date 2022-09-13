const mongoose = require('mongoose');


const issue_schema = new mongoose.Schema({
    posted_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        index: true,
        required: true
    },
    issue_raised:{
        type: String,
        enum: ['complain','suggestion', 'repair', 'other'],
        required: true
    },
    desc:{
        type: String,
        required: true
    }
    
},{timestamps: true})

const Issue = mongoose.model('Issue', issue_schema);

module.exports = Issue;