console.log("Hello App.js")

const express= require("express");
const {AdminAuth}=require("./middlewares/auth");
const app=express();

// routing with regex is only working before 5 version

// c is optional here abcx, abx works here
// app.get("/abc?x",(req,res)=>{
//     res.send("It's ? checking");
// })
// // you can add as many m as you want, abmc, abmmmmc, abmmmmmmmmmc
// app.get("/abm+c",(req,res)=>{
//     res.send("It's + checking");
// })
// // you keep whatever you want in * place, abcmdjgjdjc, abcc, abcmjdc
// app.get("/abc*c",(req,res)=>{
//     res.send("It's * checking");
// })
// // we can ignore both wz ac, awzc
// app.get("/a(wz)?c",(req,res)=>{
//     res.send("It's () checking");
// })

//below 2 works even after express 5 version also

// app.get(/a/,(req,res)=>{        // any route includes a it will work, a, aaaa, abhfu, helloah
//     res.send("It's regex checking");
// })

// app.get(/.*fly$/,(req,res)=>{            //start with anything ending fly it will work, butterfly, fly, dragonfly
//     res.send("It's regex checking");
// })

// app.get("/test",(req,res,next)=>{
//     console.log("1st event handler")
//     //  res.send("1st route handler");
//      next();
// },
// (req,res)=>{
//     console.log("2nd handler")
// res.send("2nd route handler")
// })


// app.post("/hello",(req,res)=>{
//     res.send("It's Post API")
// })
// app.delete("/hello",(req,res)=>{
//     res.send("It's delete API")
// })
// app.use("/hello",(req,res)=>{
//     res.send("Hello from the server!");
// });

app.use('/admin',AdminAuth)

app.get("/admin/getAllData",(req,res)=>{
    res.send("Successfully sent all the data");
})

app.get("/admin/deleteUser",(req,res)=>{
    res.send("Successfully deleted a user")
})


app.listen(8000,()=>{
    console.log("Server is up and running on 7000 port");
});