const mongoose = require("mongoose")

async function getConnect(){
    try{
        await mongoose.connect("mongodb://0.0.0.0:27017/liveshop")
        console.log("Database is Connected");
    }
    catch(error){
        console.log(error)
    }
}

getConnect()