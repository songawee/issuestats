var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: "./src/client/index.js",
	output: {
		path: path.join(__dirname, "build"),
		publicPath: "assets/",
		filename: "client.js"
	},
	module: {
		loaders: [
			{
        test: /\.css$/, loader: "style!css"
      },
			{
				test: /\.js$/, loader: 'babel-loader'
			}
    ]
  }
};
