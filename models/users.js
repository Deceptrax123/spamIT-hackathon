const mongoose=require("mongoose");
const passportLocalMongoose=require("passport-local-mongoose");

const userSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    passport:{
        type:String,
        required:true
    }
})

userSchema.plugin(passportLocalMongoose);
const User=mongoose.model("User",userSchema);

module.exports=User;