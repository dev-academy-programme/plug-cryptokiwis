module.exports = {
  entry: './index.js',
  output: 'bundle.js',
  module: {
    rules: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      }]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer: {
      compress: true,
      hot: true,
    },
    devtool: 'source-map'
  }


  // output: {
  //   path: __dirname + '/public',
  //   filename: 'bundle.js'
  // },
