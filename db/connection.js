//define connection between node and mongodb using mongoose 

//import mongoose
const mongoose = require('mongoose')

//get connection string
const DB = process.env.DATABASE

//connect mongodb 
mongoose.connect(DB,
{ //to avoid warnings specify topology and parser
    useUnifiedTopology:true,
    useNewUrlParser:true
})
.then(()=>{
    console.log("cart database connected successfully")
}).catch((error)=>{
    console.log(error)
})