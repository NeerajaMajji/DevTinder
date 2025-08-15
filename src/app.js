console.log("Hello App.js")

const express= require("express");
const {AdminAuth}=require("./middlewares/auth");
const app=express();

const connectionDB= require("./config/database");

const User=require('./models/user');

app.use('/admin',AdminAuth);

app.post("/signUp",async(req,res)=>{
const userObj=new User({
    firstName:'Neeraja',
    lastName:"Majji",
    emailId:'neeraja77147714@gmail.com',
    password:"Neeraja@123"
})
try{
    userObj.save();
    res.send("Saved data successfully")
}
catch(error){
    res.send("Failed to save the record")
}


})

app.get("/admin/getAllData",(req,res)=>{
    res.send("Successfully sent all the data");
})

app.get("/admin/deleteUser",(req,res)=>{
    res.send("Successfully deleted a user")
})

connectionDB().then(()=>{
console.log("DB connection established successfully");
app.listen(8000,()=>{
    console.log("Server is up and running on 7000 port");
});
}).catch((error)=>{
console.log("failed to establish the connection")
})


