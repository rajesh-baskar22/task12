const express =require("express");
const bodyParser =require("body-parser");
const connectDB = require("./config/dbConfig");
const authRoutes = require("./routes/authRoutes");



require("dotenv").config();



const app =express();

app.use(bodyParser.json());

connectDB();


app.use("/api/users", authRoutes); 




  

const PORT =3006;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});