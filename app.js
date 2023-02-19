require('dotenv').config();
const express=require("express");
const mongoose=require("mongoose");
const session=require("express-session");
const login=require("./api/login");
const todo=require("./api/todo");
const spam=require("./api/spamIt");
const passport=require("passport");
const ejs=require("ejs");
const app=express();


require("./config/db")(mongoose);

app.use(session({
    secret:process.env.TOKEN,
    resave:false,
    saveUninitialized:true
}));

app.set("view engine","ejs");
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("public"));

require("./config/passport")(passport);


app.get("/",(req,res)=>{
    res.render("home");
})
app.use("/",login);
app.use("/",todo);
app.use("/",spam);

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})