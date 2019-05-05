const path = require('path')
const webpack = require('webpack')
// nextjs typescript编译插件
const withTypescript = require("@zeit/next-typescript")
// 增加ts检测的效率
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
// nextjs中编译sass插件
const withSass = require('@zeit/next-sass')
// nextjs中使用css-modules
const withCSS = require('@zeit/next-css')
// nextjs中可以直接引用img文件
const withImages = require('next-images')
// webpack alias定义，import时可以用短路径
const alias = {
  'pages': path.resolve(__dirname, './pages'),
  'static': path.resolve(__dirname, './static'),
  'utils': path.resolve(__dirname, './src/utils'),
  'constants': path.resolve(__dirname, './src/constants'),
  'actions': path.resolve(__dirname, './src/actions'),
  'sagas': path.resolve(__dirname, './src/sagas'),
  'reducers': path.resolve(__dirname, './src/reducers'),
  'store': path.resolve(__dirname, './src/store'),
  'components': path.resolve(__dirname, './src/components'),
  'env': path.resolve(__dirname, './env'),
}

module.exports = withTypescript(
  withSass(
    withImages(
      withCSS(
        {
          minimize: true,
          cssModules: true,
          cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: "[local]__[hash:base64:5]",
          },
          distDir: 'dist', // 打包后的文件存放地址
          webpack(config, options) {
            // Do not run type checking twice:
            if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin())

            // 改变环境地址
            config.plugins.push(new webpack.NormalModuleReplacementPlugin(/.\/production/, `./${process.env.APP_ENV || 'production'}.json`))
            config.plugins.forEach(plugin => {
              if (plugin.constructor.name === 'DefinePlugin') {
                plugin.definitions['process.env.NODE_ENV'] = JSON.stringify(process.env.NODE_ENV || 'production')
                plugin.definitions['process.env.APP_ENV'] = JSON.stringify(process.env.APP_ENV || 'production')
              }
            })

            config.resolve.alias = { ...config.resolve.alias, ...alias }

            return config
          }
        }
      ) // with css
    ) // with images
  ) // with sass
)
