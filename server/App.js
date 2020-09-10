const express = require("express");
const app = express();
// express 日志中间件
const morgan = require("morgan");
// 解决跨域问题
const cors = require("cors");
// 请求体解析：JSON、Raw、文本、URL-encoded格式的请求体，
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/marksLife", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan("short"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/signUp", require("./router/signUp"));
app.use("/api/signIn", require("./router/signIn"));

module.exports = app;
