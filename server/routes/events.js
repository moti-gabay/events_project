const express = require("express");
const {eventReq} = require("../controllers/eventCtrl")
const {auth,authAdmin} = require("../middlewares/auth")
const router = express.Router();

router.get("/", async(req,res) => {
  res.json({msg:"Express homepage events"});
})

router.get("/eventsList", eventReq.eventsList);

router.post("/addEvent", auth, authAdmin, eventReq.addEvent);

router.delete("/deleteEvent/:id", auth, authAdmin ,eventReq.deleteEvent);

router.put("/editEvent/:id", auth, authAdmin ,eventReq.editEvent);



module.exports = router;