const express = require("express");

const {check} = require("../public/otp");
const router = express.Router();

router.get("/signup",check, async (req, res) => {
  
  return res.render("signUp");
});

const { handleSignUp } = require("../controllers/signedup");

router.post("/signuped", handleSignUp);

module.exports = router;
