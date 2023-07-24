const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;


// Using the eror handling with middlware function
app.use('/',(err,req,res,next)=>{

    console.error(err.stack)
    res.status(200).send("this is not a server")
   // next()
})

app.get('/',(req,res)=>{
    res.send("hello")
})
app.listen(PORT,()=>{
    console.log(`This server is running PORT ${PORT}`)
})