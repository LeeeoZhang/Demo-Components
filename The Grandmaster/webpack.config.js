const path = require('path');
module.exports = {
  entry: './src/js/init.js',
  output: {
    filename: 'merge.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        'sass-loader',
        'style-loader',
        'css-loader',
        'autoprefixer-loader'
      ]
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/,
      use: [
        'url-loader?imit=100000'
      ]
    }, {
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015'
    }]
  }
};