var path = require('path')
//var CommonsChunkPlugin = require("./node_modules/webpack/lib/optimize/CommonsChunkPlugin");
const PATHS = {
  js: path.join(__dirname, 'views'),
  build: path.join(__dirname, 'public/build')
}

module.exports = {
  entry : {
    Home : PATHS.js + "/app"
  },
  output : {
    path : PATHS.build,
    filename : "bundle.js"
  },
  module:{
    loaders:[
      {
        test: /\.(es6|js|jsx)$/,
        exclude: /node_modules|public/,
        loader: "babel-loader",
        query: {
          "presets": ["react", "es2015",'stage-0']
        }
      }
    ]
  }
}
