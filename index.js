//loads .env file contents to process.env
require('dotenv').config() // to run dotevn file while running serve express and cors used in file hence assigned to a variable

//import express
const express = require('express')

//import cors
const cors = require('cors')

//create server application using express
const server = express()

//import connection.js
require('./db/connection')

//import router
const router = require('./routes/route')

//use cors and express.json
server.use(cors())
server.use(express.json())
//both the above are examples for application specific middleware

//use route
server.use(router)


//create port to listen your server app - runtime we will add or during deployment
const PORT = process.env.PORT || 3000

//api test
server.get('/',(req,res)=>{
    res.status(200).json("E-kart server started successfully!")
})

//run our application in the specified port
server.listen(PORT,()=>{
    console.log(`E-kart server started running at port ${PORT}`)
})
