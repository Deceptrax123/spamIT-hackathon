require('dotenv').config();
const express=require("express");
const mongoose=require("mongoose");
const passport=require("passport");
const app=express();

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})