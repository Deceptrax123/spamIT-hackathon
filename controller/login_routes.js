const User=require("../models/users");
const passport=require("passport");

const getLogin=(req,res)=>{
    res.status(200).send("Login");
};

const getSignUp=(req,res)=>{
    res.status(200).send("Signup");
}

const postSignUp=async(req,res)=>{
    try{
        const existing=await User.findOne({username:req.body.username});
        if(existing)
        {
            res.status(409).json({message:"Account already exists"});
        }else{
            await User.register({username:req.body.username,email:req.body.email,Name:req.body.name},req.body.password);
            res.status(200).json({message:"Account created"});
        }
    }catch(err)
    {
        console.log(err);
        res.status(500).send({message:"Internal Server Error"});

    }
};

const postLogin=async(req,res)=>{
    try{
        const user=await User.findOne({username:req.body.username});
        if(!user){
            res.status(409).json({message:"No such user exists"});
        }else{
            passport.authenticate("local",(err,user,info)=>{
                if(err){
                    res.status(500).json({message:err});
                }
                if(!user){
                    res.status(409).json({message:"Incorrect username or password"});
                }else{
                    req.login(user,(err)=>{
                        if(err){
                            res.status(500).json({message:"Internal Server Error"});
                        }else{
                            res.status(200).json({message:"Logged in Successfully"});
                        }
                    })
                }
            })(req,res);
        }
    }catch(err)
    {
        console.log(err);
        res.status(500).json({message:"Internal server error"});
    }
}


module.exports={getLogin,getSignUp,postLogin,postSignUp};