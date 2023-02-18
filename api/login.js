const bodyParser=require("body-parser");
const router=require("express").Router();
const passport=require("passport");
const {getLogin,getSignUp,postLogin,postSignUp} = require("../controller/login_routes");

router.use(bodyParser.urlencoded({extended:true}));


//login
router.get("/login",getLogin);

//signup
router.get("/signup",getSignUp);

//send login
router.post("/login",postLogin);

//send signup
router.post("/signup",postSignUp);

module.exports=router;