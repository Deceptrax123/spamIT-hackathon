const mongoose=require("mongoose");

const spamSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId
    },
    name:{
        type:String,
    },
    category:{
        type:String,
    },
    content:{
        type:String,
    }
});

module.exports=mongoose.model("Spam",spamSchema);