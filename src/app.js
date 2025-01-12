const express = require('express');

const app = express();

//app.use(express.json());


app.get("/home" , (req , res)=>{
    res.send("<h1>getting the response 3</h1>")
})
app.post("/home" , (req , res)=>{
    res.send("<h1>getting the response 2</h1>")
})

app.use("/" , (req , res)=>{
    res.send("<h1>getting the response</h1>")
})

app.listen(7777 , ()=>{
    console.log("listening at port 7777")
})