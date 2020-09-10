const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/User");

router.post("/", (req, res, next) => {
  console.log("signIn", req.body);
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      console.log("user为对应mongodb表对应的内容", user);
      if (user.length < 1) {
        console.log("该邮件不存在");
      } else {
        // 用来比较密码是否相同
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
          console.log("1err", err);
          console.log("result", result);
          if (err) {
            return res.status(401).json({
              message: "密码不对",
            });
          }
          if (result) {
            return res.status(200).json({
              message: "密码正确,成功登陆",
            });
          }
          // return res.status(401).json({
          //   message: "密码不对",
          // });
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return result.status(500).json({
        err: err,
      });
    });
});

module.exports = router;
