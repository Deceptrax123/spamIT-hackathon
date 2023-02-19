const mongoose=require("mongoose");

const spamSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId
    },
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    content:{
        type:String,
    }
});

module.exports=mongoose.model("Spam",spamSchema);