const AdminAuth= (req,res,next)=>{
    let authToken='xyz'
    if(authToken==='xyz'){
        next()
    }
    else{
        res.status(401).send("Unauthorized user");
    }
}
module.exports={AdminAuth}