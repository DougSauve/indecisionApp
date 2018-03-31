const path = require('path');

module.exports = {
  mode: 'development',
  entry: __dirname + '/src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: __dirname + '/node_modules',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              ['transform-class-properties', { 'spec': true }]
            ]
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
}


///THIS AFTERNOON: rework the entire project - one component per file, importing/exporting!
