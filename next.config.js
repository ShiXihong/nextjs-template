const path = require('path')
const webpack = require('webpack')
const withTypescript = require("@zeit/next-typescript")
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

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
    withCSS(
    {
      minimize: true,
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]__[hash:base64:5]",
      },
      webpack(config, options) {
        // Do not run type checking twice:
        if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin())

        // 改变环境地址
        config.plugins.push(new webpack.NormalModuleReplacementPlugin(/.\/production/, `./${process.env.APP_ENV}.json`))

        config.plugins.forEach(plugin => {
          if (plugin.constructor.name === 'DefinePlugin') {
            plugin.definitions['process.env.NODE_ENV'] = JSON.stringify(process.env.NODE_ENV || 'production')
            plugin.definitions['process.env.APP_ENV'] = JSON.stringify(process.env.APP_ENV || 'production')
          }
        })

        for (let p in alias) {
          config.resolve.alias[p] = alias[p];
        }

        return config
      }
      }
    )
  )
)