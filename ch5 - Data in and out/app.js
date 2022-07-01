import express from 'express';
import './models/Student.js'
import createDoc from './models/Student.js';
import connectDB from './db/connectdb.js'
const app = express()
const port ='3000'
const DATABSAE_URI = "mongodb://localhost:27017";

connectDB(DATABSAE_URI)

createDoc()
app.listen(port, ()=>{
    console.log(`Serving at localhost:${port}`);
})

