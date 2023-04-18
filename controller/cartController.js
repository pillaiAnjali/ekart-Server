//import cartitems collection/model
const cartitems = require('../models/cartSchema')

//add items to cart
exports.addtoCart = async(req,res)=>{
    //logic
    
    //get product properties from request body
    const {id,title,price,image,quantity} = req.body
    try{
        const product = await cartitems.findOne({id})

        if(product){
            //product already exists
            product.quantity+=1
            //update net price
            product.netPrice = product.price * product.quantity

            //save changes to mongodb
            await product.save()

            //send response to client
            res.status(200).json('Item added to cart....')
        }

        else{
            //product does not exist in the cart
            //add product to cart collection
            const newProduct = new cartitems({
                id,
                title,
                price,
                image,
                quantity,
                netPrice:price
            })

            await newProduct.save()
            res.status(200).json('Item added to cart....')
        }
    }

    catch(error){
        res.status(401).json(error)
    }
}

//get total quantity
exports.getCartItems = async(req,res)=>{
    try{
        const allItems = await cartitems.find()
        res.status(200).json(allItems)
    }
    catch(error){
        res.status(401).json(error)
    }
}

//remove carItems
exports.removeCartItems = async(req,res)=>{
    const {id} = req.params

    //logic
    try{
        const removeItem = await cartitems.deleteOne({id})
        if(removeItem){
            //get remaining items other than deleted one from Cart
            const allItems = await cartitems.find()
            res.status(200).json(allItems)
        }
        else{
            res.status(404).json('Item not in cart')
        }
    }

    catch(error){
        res.status(401).json(error)
    }
}

exports.emptyCart = async(req,res)=>{
    try{
        const result = await cartitems.deleteMany({})
        res.status(200).json('Your cart is empty now')
    }

    catch(error){
        res.status(401).json(error)
    }
}