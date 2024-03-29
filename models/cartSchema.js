//define schema for product

//importmongoose
const mongoose = require('mongoose')

//using mongoose define schema
const cartSchema  = mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },

    image:{
        type:String,
        required:true
    },

    quantity:{
        type:Number,
        required:true
    },

    netPrice:{
        type:Number,
        required:true
    }
    
})

//create model of above schema

const cartitems = mongoose.model("cartitems",cartSchema) //products is the collection in mongodb 

//to use export the model

module.exports = cartitems