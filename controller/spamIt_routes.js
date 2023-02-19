const User=require("../models/users");
const Spam=require("../models/spams");

const getSpams=async(req,res)=>{
    try{
        const spams=await Spam.find({userId:req.user._id});
        res.status(200);
        res.send(spams);
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal Server Error"});
    }
};

const postSpams=async(req,res)=>{
    try{
        const spam=await new Spam({
            userId:req.user._id,
            name:req.body.name,
            category:req.body.category,
        }).save();

        res.status(200).send({message:"Item added"});
    }catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
};

const getStory=async(req,res)=>{
    try{
        const story=await Spam.findById(req.params.id);
        res.status(200);
        res.send(story.content);
    }catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
};

const postStory=async(req,res)=>{
    try{
        const content=req.body.content;
        await Spam.findByIdAndUpdate(req.params.id,{content:content});
        res.status(200).json({message:"Content added"});
    }catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
};

module.exports={getSpams,postSpams,getStory,postStory};