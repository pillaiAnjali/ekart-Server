//import express
const express = require('express')
//in index.js server var . http req but here we havent imported server var so cannot use it

//Router
const router = new express.Router() // to set up path for different request 

//import controller
const productcontroller = require('../controller/productController')
const wishlistController = require('../controller/wishlistController')
const cartController = require('../controller/cartController')
//get all products
//router.httpReq('path',call back to resolve api)

//fetch all products
router.get('/products/all-products',productcontroller.getallproducts)

//view individual product
router.get('/products/:id',productcontroller.viewProduct)

//add to wishlist
router.post('/products/add-to-wishlist',wishlistController.addToWishlist)

//get all items in wishlist
router.get('/wishlists/get-all-items',wishlistController.getAllWishlistItems)

//remove item from wishlist
router.get('/wishlists/remove-item/:id',wishlistController.removeWishlistItem)

//route for adding item to cart
router.post('/products/add-to-cart',cartController.addtoCart)

//get all cart items
router.get('/wishlists/get-all-cart-items',cartController.getCartItems)

//remove item from cart
router.delete('/cart/item/:id',cartController.removeCartItems)

//empty cart
router.delete('/cart/empty-cart',cartController.emptyCart)

module.exports=router