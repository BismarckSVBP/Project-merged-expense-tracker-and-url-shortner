
const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/otp", async (req, res) => {
  
  return  res.sendFile(path.join(__dirname, '../public', 'otp.html'));
});

module.exports = router;

