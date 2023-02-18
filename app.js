require('dotenv').config();
const express=require("express");
const mongoose=require("mongoose");
const login=require("./api/login");
const passport=require("passport");
const app=express();


require("./config/db")(mongoose);

app.get("/",(req,res)=>{
    res.send("home page");
})
app.use("/",login);

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})