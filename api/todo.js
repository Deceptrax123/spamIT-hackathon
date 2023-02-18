const router=require("express").Router();
const bodyParser=require("body-parser");
const {getLists,postLists,getItems,postItems,deleteList}=require("../controller/todo_routes");

router.use(bodyParser.urlencoded({extended:true}));

router.get("/lists",getLists);
router.post("/lists",postLists);
router.get("/lists/:id",getItems);
router.post("/lists/:id",postItems);
router.post("/lists/:id/delete",deleteList)

module.exports=router;