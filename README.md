# H5项目框架

## 目录说明
```$xslt
pages           存放路由对应的页面
server          存放路由配置以及koa配置
static          静态文件存放
src             开发主文件
    actions     redux actions存放位置
    components  react component存放位置
    constants   常量存放位置
    reducers    redux reducers存放位置
    sagas       sagas存放位置
    store       store配置
    types       typescript interface定义文件
    utils       常用库
env             接口环境配置
```

## 配置文件说明
```$xslt
.babelrc        babel配置文件
.gitignore      git提交忽略文件配置
log4.config     log4js配置文件
next.config     next配置文件，主要是配置webpack
nodemon         nodemon配置文件
postcss.config  post css配置文件
tsconfig        typescriot配置文件
```
## js核心库
- [x] [React](https://facebook.github.io/react/)
- [x] [Next.js](https://nextjs.org/)
- [x] [Redux](https://github.com/reactjs/redux)
- [x] [Immer](https://github.com/mweststrate/immer)
- [x] [React Router 4](https://reacttraining.com/react-router/)
- [x] [React Intl](https://github.com/yahoo/react-intl)
- [x] [Redux Actions](https://github.com/acdlite/redux-actions)
- [x] [Redux Saga](https://github.com/yelouafi/redux-saga)
- [x] [Axios](https://github.com/axios/axios)
- [x] [koa](https://github.com/koajs/koa)

## 开发依赖
- [x] [Typescript](https://www.typescriptlang.org/)
- [x] [Postcss](https://github.com/postcss/postcss)
- [x] [css-modules](https://github.com/css-modules/css-modules)
- [x] [sass](https://sass-lang.com/)
- [x] [babel](https://babeljs.io/)

## 安装
```sh
yarn install
```

## 启动
网址: http://127.0.0.1:3000
```sh
yarn test
```

## test
```sh
yarn build:test
yran start
```

## build
线上环境
```sh
yarn run build
yarn start
```
预发布环境
```sh
yarn run build:pre
yarn start
```
开发环境
```sh
yarn run build:pro
yarn start
```
