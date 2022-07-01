import express from 'express';

import connectDB from './db/connectdb.js'
const app = express()
const port ='3000'
// const DATABSAE_URI = "mongodb://Mahak:Goyal@localhost:27017/MahakBlog?authSource=MahakBlog";
const DATABSAE_URI = "mongodb://localhost:27017";
connectDB(DATABSAE_URI)

app.listen(port, ()=>{
    console.log(`Serving at localhost:${port}`);
})

