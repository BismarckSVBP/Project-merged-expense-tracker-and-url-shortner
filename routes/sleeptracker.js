const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {

  // return res.end("Chale ja Bossdk project abhi complete nahi hua hai hone ke baad aana...");
   return res.end("Project is Under-Deplopment.So you can enjoy other features of my web-project.Good Bye Baby...");
});

module.exports = router;
