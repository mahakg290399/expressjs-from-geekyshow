const express = require('express')
const app =  express()
const port = process.env.port || 3000

app.get('/',(req,res)=>{
    res.send("Hello"+ "Mahak")
}
)

app.listen(port,()=>{
    console.log(`Example app listening at localhost${port}`);
})
