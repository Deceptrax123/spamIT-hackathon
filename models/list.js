const mongoose=require("mongoose");

const listSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId
    },
    listName:{
        type:String,
        required:true
    },
    items:[{
        content:{
            type:String,
        },
        date:{
            type:String,
        }
    }],
    date:{
        type:String,
    }
});

const List=mongoose.model("List",listSchema);
module.exports=List;