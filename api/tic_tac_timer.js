const router=require("express").Router();
const {getTimer,getTicTac}=require("../controller/tic_tac_timer_routes");

router.get("/timer",getTimer);
router.get("/tic-tac-toe",getTicTac);

module.exports=router;