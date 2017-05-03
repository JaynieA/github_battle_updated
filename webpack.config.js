const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

//NODE_ENV to production
//uglify

let config = {
  entry:'./app/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {test:  /\.jsx?$/, use: ['babel-loader']},
      {test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};

//If we are not building for production
if(process.env.NODE_ENV !== 'production') {
  config.plugins.push(
    new webpack.EnvironmentPlugin(['GITHUB_API_ID', 'GITHUB_API_SECRET'])
  );
}

//If we are building for production
if(process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env' : {
        'NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  );
}

module.exports = config;
