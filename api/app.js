var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
mongoose.connect(process.env["JUICIER_DB_CONNECTION_STRING"], {
  useNewUrlParser: true
});

var indexRouter = require("./routes/index");
var foodsRouter = require("./routes/foods");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/foods", foodsRouter);

module.exports = app;
