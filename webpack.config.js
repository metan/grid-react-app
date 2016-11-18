var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-dev-server/client?http://127.0.0.1:8080/',
		'webpack/hot/only-dev-server',
		'./src'
	],
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react', 'react-hmre']
				}
			},
			{
                test: /\.styl/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
            	test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/,
            	loader: 'url-loader?limit=100000'
            }
		]
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
}
