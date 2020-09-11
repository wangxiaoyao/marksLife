import React from "react";
import IconSvg from "@/component/IconSvg";
import { Link } from "react-router-dom";
import style from "./style.less";
require("@/source/svg/starMan.svg");

const Whoops404 = () => {
  return (
    <div className={style.whoops404}>
      <IconSvg name="starMan"></IconSvg>
      <div className={style.right}>
        <h1>404</h1>
        <h2>UH OH! 页面丢失</h2>
        <p>您所寻找的页面不存在。你可以点击下面的按钮，返回主页。</p>
        <Link to="/login/signUp">
          <button>返回首页</button>
        </Link>
      </div>
    </div>
  );
};

export default Whoops404;
