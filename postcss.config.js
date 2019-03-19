const { resolve } = require('path')
const smartImport = require('postcss-smart-import')
const precss = require('precss')
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

module.exports = {
  plugins: [
    // 处理css中的@import
    smartImport({
      path: resolve('src')
    }),

    // pxtorem将css中的px转换成rem， 默认转换值为16px
    // rootValue 设置转换基准值
    // propList 设置那些css属性需要转换, *表示所有
    // 具体参照：https://github.com/cuth/postcss-pxtorem
    pxtorem({
      rootValue: 16,
      propList: ['*'],
    }),

    // precss是css的一种编译，会自动识别当然css中的写法，
    // 比如可以在css中使用less写法或者sass写法
    // 具体参照：https://github.com/jonathantneal/precss
    precss,

    // autoprefixer是在编译的时候自动加上浏览器前缀，增加兼容性
    // 具体参照：https://github.com/postcss/autoprefixer
    autoprefixer
  ]
}