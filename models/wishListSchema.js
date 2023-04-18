//define schema for product

//importmongoose
const mongoose = require('mongoose')

//using mongoose define schema
const wishListSchema  = mongoose.Schema({
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
    }
    
})

//create model of above schema

const wishlists = mongoose.model("wishlists",wishListSchema) //products is the collection in mongodb 

//to use export the model

module.exports = wishlists