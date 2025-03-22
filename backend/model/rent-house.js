const mongoose = require('mongoose');

const rentHouseSchema =  mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    bed:{
        type:Number,
        required:true
    },
    bath:{
        type:Number,
        required:true
    },
    sqft:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    name: {
         type: String, 
         required: true 
        },
    email: {
         type: String, 
         required: true 
        },
    phone: { 
        type: String, 
        required: true 
    },
    message: {
         type: String, 
         required: true 
        },
    createdAt: {
         type: Date, 
         default: Date.now 
        },

})

module.exports = mongoose.model('RentHouse', rentHouseSchema);