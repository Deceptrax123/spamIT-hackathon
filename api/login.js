const bodyParser=require("body-parser");
const router=require("express").Router();
const passport=require("passport");
const getLogin=require("../controller/login_routes");

router.use(bodyParser.urlencoded({extended:true}));


//login
router.get("/login",getLogin);

module.exports=router;