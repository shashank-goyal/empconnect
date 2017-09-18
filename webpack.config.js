var path = require('path')
var webpack = require('webpack')
var CommonsChunkPlugin = require("./node_modules/webpack/lib/optimize/CommonsChunkPlugin");
const PATHS = {
  js: path.join(__dirname, 'views'),
  build: path.join(__dirname, 'public/build')
}

module.exports = {
  devtool: 'cheap-module-source-map',
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
        exclude: /node_modules|public|routes/,
        loader: "babel-loader",
        query: {
          "presets": ["react", "es2015",'stage-0']
        }
      },
      {
      test: /\.css$/,  
      include: /node_modules/,  
      loaders: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   mangle: true,
    //   compress: {
    //     warnings: false, // Suppress uglification warnings
    //     pure_getters: true,
    //     unsafe: true,
    //     unsafe_comps: true,
    //     //drop_console: true
    //   },
    //   output: {
    //     comments: false,
    //   },
    //})
  ],
}
