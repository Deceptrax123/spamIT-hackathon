const getTimer=(req,res)=>{
    res.status(200);
    res.render("pomodoro");
}

const getTicTac=(req,res)=>{
    res.status(200);
    res.render("tictactoe");
}

module.exports={getTimer,getTicTac};