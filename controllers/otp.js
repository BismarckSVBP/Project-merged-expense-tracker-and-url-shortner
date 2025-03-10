const express = require("express");

const router = express.Router();
const checker = false;
function sendOTP() {
  const email = document.getElementById("email");
  const otpverify = document.getElementsByClassName("otpverify")[0];
  let otp_val = Math.floor(Math.random() * 10000);

  let emailbody = `<h2>Your OTP is </h2>${otp_val}`;
  Email.send({
    SecureToken: "SENDER_EMAIL_SECURE_TOKEN",
    To: email.value,
    From: "SENDER_EMAIL",
    Subject: "Email OTP Using JS",
    Body: emailbody,
  }).then((message) => {
    if (message === "OK") {
      alert("OTP sent to your email " + email.value);

      otpverify.style.display = "flex";
      const otp_inp = document.getElementById("otp_inp");
      const otp_btn = document.getElementById("otp-btn");

      otp_btn.addEventListener("click", () => {
        if (otp_inp.value == otp_val) {
          alert("Email address verified...");
          checker =true;
          
          router.get("/signup", async (req, res) => {
            return res.render("signUp");
          });
        } else {
          alert("Invalid OTP");
        }
      });
    }
  });
}
async function check(req, res, next) {
    if(checker ==true){
         next();
    }
   else{
    document.write("Direct access is denied");
   }
  }
module.exports={check};
