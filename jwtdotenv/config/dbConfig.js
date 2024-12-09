const mongoose =require("mongoose");

const connectDB =async () =>{
    try{
        await mongoose.connect("mongodb+srv://guvi:guvi123@cluster0.yej84.mongodb.net/");
        console.log("database connected");
    } catch(error){
        console.log("database connection failed");
    }
};

module.exports =connectDB;