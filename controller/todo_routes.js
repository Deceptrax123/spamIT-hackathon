const List=require("../models/list");
const User=require("../models/users");

const getItems=async(req,res)=>{
    const items=await List.find();
    res.render("spam");
}


module.exports={getItems};