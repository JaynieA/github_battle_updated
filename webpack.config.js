let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:'./app/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {test: /\.(jsx)$/, use: 'babel-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'app/index.html'
  })]
};
