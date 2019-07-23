const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './public'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: "./src/template/index.pug",
      minify: false
    })
  ],
  output: {
    filename: 'build/bundle.js',
    path: path.resolve(__dirname, 'public/')
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: "pug-loader",
            options: {
              pretty: true
            }
          }
        ]
      }
    ]
  }
};
