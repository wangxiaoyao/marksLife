# marksLife

>> 关于一个记账的小工具。

使用的架构是： react + express + MongoDB 

## client

```
npx create-react-app client
antd
axios
```

## server

```
express
nodemon
morgan
body-parser
cors
mongoose
```

### 安装MongoDB

社区版本： 使用brew

[官网](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

```
## 注意下列命令。 tap 是一种对brew的扩展。关联github
brew tap mongodb/brew

## 启动
brew services start XXX
```


## 功能点

- 注册/登录功能
- 记账功能
- 记事功能



## 知识点

### 1 路由配置

1 配置404页面： 需要配置Switch 组件。 因为该组件只渲染其中一个子路由


### SVG使用

```
## webpack处理svg
npm install svg-sprite-loader -D
```


