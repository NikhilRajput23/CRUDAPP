// ===== Imports =====
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const dotenv = require("dotenv");
const mongoConfig = require("./config/mongoConfig");

// ===== Load env =====
dotenv.config();

// ===== App init =====
const app = express();

// ===== View engine =====
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// ===== Middleware =====
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: true,
  })
);

// Flash message middleware
app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

// Static files
app.use(express.static(path.join(__dirname, "public")));

// ===== MongoDB connect =====
mongoConfig();

// ===== Routes =====
app.use("/", require("./routes/routes"));

// ===== Server start (IMPORTANT FIX FOR RENDER) =====
const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
