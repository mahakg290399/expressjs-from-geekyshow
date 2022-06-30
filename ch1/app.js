const express = require('express')
const app = express()
const port = process.env.port || 3000

app.get('/', (req, res) => {
    res.send("Hello" + "Mahak")
})

app.get(/about/, (req, res) => {
    res.send(`About Page`)
})

app.get("/cb1", (req, res, next) => {
    console.log("First callback");
    // res.send("First Callback")
    next()
},
    (req, res) => {
        console.log("Second callback");
        res.send("Second callback");
    })
// function next(){
//     console.log("In Next");
//     res.send("From Next")
// }
app.listen(port, () => {
    console.log(`Example app listening at localhost${port}`);
})