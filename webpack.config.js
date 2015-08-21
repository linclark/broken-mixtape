var path = require('path')

module.exports = {
  entry: './src/App.js',
  output: {
    path: "public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /(node_modules!public)/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.gif$/,
        exclude: /(node_modules!public)/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".json", ".jsx"],
    fallback: path.join(__dirname, "node_modules")
  },
  resolveLoader: {
    fallback: path.join(__dirname, "node_modules")
  }
};
