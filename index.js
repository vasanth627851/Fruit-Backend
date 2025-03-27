const express = require("express")
const app = express()
const PORT = process.env.PORT||5000
app.listen(PORT,function()
{
    console.log("Running port 5000....")
})

const myarr = []
app.get("/home",function(req,res)
{
    
    myarr.push(req.query.value)
    console.log(myarr)
    res.send(myarr)
})

app.get("/",(req,res)=>
{
    res.send("Welcome to Website :)")
})



