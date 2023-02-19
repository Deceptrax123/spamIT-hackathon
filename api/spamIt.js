const router=require("express").Router();
const bodyParser=require("body-parser");
const {getSpams,postSpams,getStory,postStory,postStorypage}=require("../controller/spamIt_routes");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/stories",getSpams);
router.post("/stories",postSpams);
router.get("/stories/story/:id",getStory);
router.post("/stories/post",postStory);
router.get("/stories/post",postStorypage);

module.exports=router;