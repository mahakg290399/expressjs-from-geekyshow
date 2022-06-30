const mongoose = require ('mongoose')
const express = require('express')
const { addListener } = require('nodemon')
const app = express()
const port ='3000'

mongoose.connect('mongodb://localhost:27017/test').then(()=>{
    console.log("Connected Successfully!!!");
})

app.listen(port, ()=>{
    console.log(`Serving at localhost:${port}`);
})

