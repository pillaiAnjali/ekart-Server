//define schema for product

//importmongoose
const mongoose = require('mongoose')

//using mongoose define schema
const productSchema  = mongoose.Schema({
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
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    rate:{
        rate:{
            type:Number,
            required:true
        },
        count:{
            type:Number,
            required:true
        }
    }
})

//create model of above schema

const products = mongoose.model("products",productSchema) //products is the collection in mongodb 

//to use export the model

module.exports = products