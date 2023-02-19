const router=require("express").Router();
const bodyParser=require("body-parser");
const {getItems}=require("../controller/todo_routes");

router.use(bodyParser.urlencoded({extended:true}));

router.get("/lists",getItems);

module.exports=router;