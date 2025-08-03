console.log("Hello App.js")

const express= require("express");
const app=express();

// routing with regex is only working before 5 version

// c is optional here abcx, abx works here
app.get("/abc?x",(req,res)=>{
    res.send("It's ? checking");
})
// you can add as many m as you want, abmc, abmmmmc, abmmmmmmmmmc
app.get("/abm+c",(req,res)=>{
    res.send("It's + checking");
})
// you keep whatever you want in * place, abcmdjgjdjc, abcc, abcmjdc
app.get("/abc*c",(req,res)=>{
    res.send("It's * checking");
})
// we can ignore both wz ac, awzc
app.get("/a(wz)?c",(req,res)=>{
    res.send("It's () checking");
})

app.get(/a/,(req,res)=>{
    res.send("It's regex checking");
})


app.post("/hello",(req,res)=>{
    res.send("It's Post API")
})
app.delete("/hello",(req,res)=>{
    res.send("It's delete API")
})
app.use("/hello",(req,res)=>{
    res.send("Hello from the server!");
});

app.listen(8000,()=>{
    console.log("Server is up and running on 7000 port");
});