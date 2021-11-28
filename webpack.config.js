const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = (options, webpack) => {
  const lazyImports = [
    '@nestjs/microservices/microservices-module',
    '@nestjs/websockets/socket-module'
  ]

  const moduleName = options.entry.split('/apps/')[1].split('/src')[0]

  return {
    ...options,
    externals: [],
    output: {
      ...options.output,
      path: path.resolve(__dirname, `apps/${moduleName}/dist`),
      libraryTarget: 'commonjs2',
      filename: 'main.js'
    },
    mode: 'development',
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            keep_classnames: true
          }
        })
      ]
    },
    plugins: [
      ...options.plugins,
      new webpack.IgnorePlugin({
        checkResource (resource) {
          if (lazyImports.includes(resource)) {
            try {
              require.resolve(resource)
            } catch (err) {
              return true
            }
          }
          return false
        }
      })
    ]
  }
}
