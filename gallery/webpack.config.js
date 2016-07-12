module.exports  = {
	entry: {
		bundle: './react.js',
	},
	output: {
		path: './build',
		publicPath: './build/',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
			{test:/\.js$/, loader:'babel-loader'}
		]
	},
	resolve: {
		extensions:['', '.coffee', '.js']
	}
}