const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  add2paper: 'src/index.js',
  build: 'static/'
};
const PORT = 1111;

const common = {
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }, {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }]
  },
  output: {
    filename: 'add2paper.bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.coffee'],
    root: [
      path.resolve('./src')
    ]
  }
};

// Development config
const dev = merge(common, {
  port: PORT,
  devtool: 'source-map',
  entry: {
    add2paper: [
      'webpack-dev-server/client?http://0.0.0.0:' + PORT,
      'webpack/hot/only-dev-server',
      path.join(__dirname, PATHS.add2paper)
    ]
  },
  output: {
    path: path.join(__dirname, PATHS.build),
    publicPath: 'http://localhost:' + PORT + '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});

// Production config
const prod = merge(common, {
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false
    })
  ]
});

module.exports = { PATHS, dev, prod };
