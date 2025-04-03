const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const { connectToMongoDB } = require("./connections");

dotenv.config(); // Load .env variables

const app = express();
const port = process.env.PORT || 1002;

// 🔗 Connect to MongoDB
connectToMongoDB();

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./view"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Routes
const otp = require("./routes/otp");
const signUp = require("./routes/signUp");
const login = require("./routes/login");
const expense = require("./routes/expenseui");
const afterlogin = require("./routes/afterlogin");
const homepage = require("./routes/homepage");
const urlRoute = require("./routes/url");
const urlshortner = require("./routes/urlshortners");

const { restrictToLoggedinUserOnly, checkAuth } = require("./middlewares/foraccessingafterloginpage");

app.use("/", signUp);
app.use("/auth", otp);
app.use("/user", login);
app.use("/user/expense", restrictToLoggedinUserOnly, checkAuth, expense);
app.use("/user/afterloginpage", restrictToLoggedinUserOnly, afterlogin);
app.use("/homepage", homepage);
app.use("/url", urlRoute);
app.use("/urlshortner", urlshortner);

// Serve Static HTML for Home Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// URL Shortener Redirect Handler
const URL = require("./models/url");
app.get("/url/:shortId", async (req, res) => {
  try {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      { shortId },
      { $push: { visitHistory: { timestamp: Date.now() } } },
      { new: true }
    );

    if (!entry) {
      return res.status(404).send("❌ Shortened URL Not Found");
    }

    res.redirect(entry.redirectURL);
  } catch (error) {
    console.error("❌ Error Redirecting URL:", error);
    res.status(500).send("Server Error");
  }
});

// 404 Error Handler
app.use((req, res) => {
  res.status(404).send("❌ Page Not Found");
});

// Start Server
app.listen(port, () => console.log(`🚀 Server Started at PORT: ${port}`));
