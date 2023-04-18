//logic to gett all products from mongodb
//import products collection/logic 
const products = require('../models/productSchema')

exports.getallproducts = async (req,res) =>{
    //logic to get all products from database
    try{
        const allproducts = await products.find()
        //send response to client
        res.status(200).json(allproducts)
    }
    catch(error){
        res.status(401).json(error)
    }
    
}

//logic to get adetails of a single product from database

exports.viewProduct = async(req,res)=>{
    //get id of product from url
    const id = req.params.id

    //logic
    const product = await products.findOne({id})
    if(product){
        res.status(200).json(product)
    }
    else{
        res.status(401).json(error)
    }


}