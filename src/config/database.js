const mongoose=require('mongoose');


const connectionDB= async()=>{
        await mongoose.connect('mongodb+srv://neeraja77147714:BQ1n77INJmHK8z7q@namastenode.egdaehi.mongodb.net/devTinder');
    
}

 connectionDB();

module.exports = connectionDB;