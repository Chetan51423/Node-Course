const express = require('express')
const app = express();

app.get("/", (req, res)=>{
    res.end(`hello ${req.query.name} Welcome to home Page`)
})

app.get("/contact", (req, res)=>{
    res.end(`Hello ${req.query.name} Wecome to contact page`)
})

app.get("/about", (req, res)=>{
    res.end(`Hello ${req.query.name} Wecome to about page`)
})

app.listen(8000, ()=>{
    console.log("Server Running successfully")
});