console.log("Hello App.js")

const express= require("express");
const app=express();

app.listen(7000,()=>{
    console.log("Server is up and running on 7000 port");
});

app.use((req,res)=>{
    res.send("Hello from the server");
});