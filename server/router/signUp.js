const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("../models/User");

router.post("/", (req, res, next) => {
  console.log(req.body);
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      console.log("user", user);
      if (user.length >= 1) {
        res.status(409).json({
          message: "重复",
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, resultPassWord) => {
          if (err) {
            console.log(err);
            res.status(500).json({
              message: "密码解析错误",
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              name: req.body.name,
              email: req.body.email,
              password: resultPassWord,
            });
            user
              .save()
              .then((result) => {
                console.log(result);
                res.status(201).json({
                  message: "新建成功",
                });
              })
              .catch((err) => {
                console.log("内部err", err);
                res.status(500).json({
                  message: err,
                });
              });
          }
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(422).json({
        message: "外部" + err,
      });
    });
  // res.status(200).json({
  //   message: "message post at api/signUp ",
  // });
});

module.exports = router;
