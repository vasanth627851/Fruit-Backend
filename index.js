const express = require("express")
const app = express()
const PORT = process.env.PORT||5000
app.listen(PORT,()=>
{
    console.log(`Running port ${PORT}....`)
})

const myarr = []
app.get("/home",function(req,res)
{
    const value = req.query.value
    myarr.push(value)
    console.log(myarr)
    res.send(myarr)
})

app.get("/",(req,res)=>
{
    res.send("Welcome to Website :)")
})



