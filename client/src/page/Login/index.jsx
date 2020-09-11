import React from "react";
import style from "./style.less";

const Login = (props) => {
  return <div className={style.login}>{props.children}</div>;
};

export default Login;
