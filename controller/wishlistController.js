//import wishlist collection/model
// const { db } = require('../models/wishListSchema');
const { find } = require('../models/wishListSchema');
const wishlists = require('../models/wishListSchema')

//login to add to wishlist
exports.addToWishlist = async(req,res)=>{
    //destructuring 
    //emp = {id:1,name:'anjali'}
    //const {id,name}=emp
    //Can use id instead of emp.id

    //get product details from req
    const {id,title,price,image} = req.body;//destructuring 

    //check if product already in wishlist
    try{
        const item = await wishlists.findOne({id})
        
        if(item){
            res.status(400).json("Item already exist in wishlist!")
        }

        else{
            const newProduct = new wishlists({
                id,title,price,image
            })

            //save to db
            await newProduct.save()
            console.log(newProduct)
            res.status(200).json("Item added to your wishlist!!")

        }
    }
    catch(error){
        res.status(401).json(error)
    }
    
}

//get all items from wishlist
exports.getAllWishlistItems = async(req,res)=>{
    //logic
    try{
        //to get all items from a collection
        const allItems = await wishlists.find()
        if(allItems){
            res.status(200).json(allItems)
        }
        else{
            res.status(400).json('Wishlist is Empty!')
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}

//remove from wishlist
exports.removeWishlistItem=async (req,res)=>{
    //get product id from req url
    const id= req.params.id

    try{
        const item = await wishlists.deleteOne({id})
        if(item){
            const allItems = await wishlists.find()
            res.status(200).json(allItems)
        }
        else{
            res.status(400).json('Item not in wishlist!')
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}