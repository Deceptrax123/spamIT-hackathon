require('dotenv').config();
const express=require("express");
const mongoose=require("mongoose");
const session=require("express-session");
const login=require("./api/login");
const todo=require("./api/todo");
const passport=require("passport");
const app=express();


require("./config/db")(mongoose);

app.use(session({
    secret:process.env.TOKEN,
    resave:false,
    saveUninitialized:true
}));

app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);


app.get("/",(req,res)=>{
    res.send("home page");
})
app.use("/",login);
app.use("/",todo);

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})