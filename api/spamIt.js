const router=require("express").Router();
const bodyParser=require("body-parser");
const {getSpams,postSpams,getStory,postStory}=require("../controller/spamIt_routes");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/stories",getSpams);
router.post("/stories",postSpams);
router.get("/stories/:id",getStory);
router.post("/stories/:id",postStory);

module.exports=router;