const path = require('path');

module.exports = {
  mode: 'development',
  entry: __dirname + '/src/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
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
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}


///THIS AFTERNOON: rework the entire project - one component per file, importing/exporting!
