const { Router} = require("express");
const {auth, authAdmin} = require("../middlewares/auth");
const { guestReq } = require("../controllers/guestCtrl");
const { adminReq } = require("../controllers/adminCtrl");
const router = Router();

router.get("/", async(req,res) => {
  res.json({msg:"guests endpoint"}); 
})

// user requests
router.post("/login", guestReq.login);
router.get("/getGuestInfo", auth, guestReq.getInfo);
router.get("/checkToken", auth, guestReq.checkToken);
router.post("/signUp", adminReq.SignUp);

// admin requests
router.post("/signUp",auth,authAdmin, adminReq.SignUp);
router.get("/guestsList", adminReq.guestsList);
router.get("/checkAdminToken", auth, authAdmin, adminReq.checkAdminToken);
router.delete("/delete/:id", auth, authAdmin, adminReq.delteGuestById);
router.patch("/changeRole/:id/:role",auth, authAdmin, adminReq.changeRole);

module.exports = router;


