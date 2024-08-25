const express = require("express");
const UI = require("../models/expenseui");
const router = express.Router();

router.get("/", async (req, res) => {
  if(!req.user) return res.redirect("/user/login");
  const data = await UI.find({createdBy:req.user._id});
  return res.render("expense", {
    details: data,
  });
});
const { handleUI } = require("../controllers/expenseui");
router.post("/post", handleUI);

module.exports = router;
