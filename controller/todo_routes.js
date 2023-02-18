const List=require("../models/list");
const User=require("../models/users");

const getLists=async(req,res)=>{
    try{
        const lists=await List.find({userId:req.user._id});
        res.status(200);
        res.send(lists);
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal Server Error"});
    }
}
const postLists=async(req,res)=>{
    const today=new Date();
    const day=String(today.getDate());
    const month=String(today.getMonth());
    const year=String(today.getFullYear());
    try{
        const list=await new List({
            userId:req.user._id,
            listName:req.body.name,
            date:day+'-'+month+'-'+year
        }).save();

        res.status(200).json({message:"List added"});
    }catch(err)
    {
        console.log(err);
        res.status(500).json({message:"Internal Server Error"});
    }
}

const getItems=async(req,res)=>{
    try{
        const list=await List.findById(req.params.id);
        res.status(200);
        res.send(list);
    }catch(err)
    {
        console.log(err);
        res.status(500).json({message:"Internal Server error"});
    }
}

const postItems=async(req,res)=>{
    try{
        const today=new Date();
        const day=String(today.getDate());
        const month=String(today.getMonth());
        const year=String(today.getFullYear());

        const item={
            content:req.body.content,
            date:day+'-'+month+'-'+year
        }
        const list=await List.findById(req.params.id);
        const listItems=list.items;
        listItems.push(item);

        await List.findByIdAndUpdate(req.params.id,{items:listItems});
        res.status(200).json({message:"Item Added"});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal Server Error"});
    }
}

module.exports={getLists,postLists,getItems,postItems};