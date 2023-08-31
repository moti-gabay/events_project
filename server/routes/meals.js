const express = require("express");
const { auth,authAdmin} = require("../middlewares/auth")
const {mealReq} = require("../controllers/mealCtrl")
const router = express.Router();

router.get("/", async(req,res) => {
  res.json({msg:"Express homepage meals"});
})

router.get("/mealsList",mealReq.mealsList );

router.post("/addMeal", auth, authAdmin, mealReq.addMeal);

router.delete("/deleteMeal/:id", auth, authAdmin, mealReq.deleteMeal);

router.put("/editMeal/:id", auth, authAdmin, mealReq.editMeal);

module.exports = router;