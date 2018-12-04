const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const getStyle = isDev => {
  const specPath = [
    /node_modules|admin.less|global.less/,
    path.resolve(__dirname, '../src/core/styles/index.less')
  ]

  const loader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader

  const rule = [
    {
      test: /\.(le|c)ss/,
      exclude: specPath,
      use: [
        {
          loader: loader
        },
        {
          loader:
            'css-loader?sourceMap&modules=true&localIdentName=[local]_[hash:base64:5]'
        },
        {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true
          }
        }
      ]
    },
    {
      test: /\.(le|c)ss/,
      include: specPath,
      use: [
        {
          loader: loader
        },
        {
          loader: 'css-loader?sourceMap'
        },
        {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true
          }
        }
      ]
    }
  ]

  return rule
}

module.exports = {
  getStyle
}
