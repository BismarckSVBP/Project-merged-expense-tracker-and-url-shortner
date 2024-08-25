// const express = require("express");

// const router = express.Router();
// const sendEmail = (req, res) => {
//   const OTP = Math.floor(1 + Math.random() * 9000);
//   console.log(OTP);
  
// };
// router.get("/getotp", sendEmail);

// module.exports = router;



// const mail = require('nodemailer');
// const emailProvider = mail.createTransport({
//   service:"gmail",
//   secure:true,
//   port:465,
//   auth:{
//     user:"kasaudhanabhaykumar8562@gmail.com",
//     pass:"1",
//   },
//   tls:{
//     rejectUnauthorized:false
//   }
// })
// const otp = require('./routes/otp');

// app.get("/getotp", otp);


const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/otp", async (req, res) => {
  
  return  res.sendFile(path.join(__dirname, '../public', 'otp.html'));
});


// const { handleSignUp } = require("../controllers/signedup");

// router.post("/signuped", handleSignUp);

module.exports = router;

