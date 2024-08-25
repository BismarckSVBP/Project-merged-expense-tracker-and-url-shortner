const express = require("express");

const router = express.Router();
const checker = false;
function sendOTP() {
  const email = document.getElementById("email");
  const otpverify = document.getElementsByClassName("otpverify")[0];
  let otp_val = Math.floor(Math.random() * 10000);

  let emailbody = `<h2>Your OTP is </h2>${otp_val}`;
  Email.send({
    SecureToken: "408c93b4-293f-4275-8740-b3e6897c867c",
    To: email.value,
    From: "bismarcksvbp@gmail.com",
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
          checker = true;

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
  if (checker == true) {
    next();
  } else {
    res.json({msg : "Access is denied"});
  }
}
module.exports = { check };
