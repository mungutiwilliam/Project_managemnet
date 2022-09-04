const mongoose = require('mongoose');

const apartment_schema =  new mongoose.Schema({
    name: {
        type: String,
         required: true},

    city:{
        type : String, 
        required: true
    },
    estate:{
        type: String,
        enum: ['KahawaWendani','Nyali','Kilimani','Riverside','Westlands',
        'SpringValley','Kileleshwa','Kikuyu','Hurlingham','Muthaiga',
        'Shanzu','Lavington'],
        required: true
    },
    num_units:{
        type : Number,
        required: true
    },
    unit_type:[{  
        type : String,
        enum : ['1B','2B','3B','4B'],
        required: true
    }],
    bathroom_num:[{
        type: Number,
        enum:[2, 3, 1, 4, 5],
        required: true
    }],
    units_occupied:{
        type : Number,
        required : false    
    },
    agent:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: false,
        index: true
    }
})


const Apartment = mongoose.model('Apartment', apartment_schema)

module.exports = Apartment;