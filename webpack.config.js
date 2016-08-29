var path = require('path');
var webpack = require('webpack');
var debug = process.env.DEBUG === 'local';
console.log(' ===== %s ===== ', debug === true ? 'DEBUG' : 'PRODUCTION');

// var HtmlWebpackPlugin = require('html-webpack-plugin');
var plugins = [
	new webpack.BannerPlugin('This file is created by eeve.'),
	new webpack.optimize.OccurenceOrderPlugin(),
	new webpack.NoErrorsPlugin(),
	new webpack.HotModuleReplacementPlugin()
	// new HtmlWebpackPlugin({
	// 	inject: false,
	// 	template: './src/index.ejs',
	// 	title: 'McLauncher - [由eeve开发的一款全平台的Minecraft启动器]',
	// 	hash: true,
	// 	chunks: ['js/app'],
	// 	css: ["css/app.css"],
	// 	devServer: 'http://localhost:8080'
	// }),
];

if (!debug) {
	plugins = plugins.concat([
		new webpack.optimize.UglifyJsPlugin({
			test: /(\.jsx|\.js)$/,
			compress: {
				warnings: false
			}
		})
	]);
}

var browsers = '{browsers:["last 2 version", "ie >= 8"]}';

module.exports = {
	context: __dirname,
	entry: {
		app: ['webpack/hot/dev-server', './app/app.js']
	},
	output: {
		// 页面相对路径
		publicPath: "/dist/",
		// 生成文件所在路径
		path: path.resolve(__dirname, 'app', 'dist'),
		// 文件名
		filename: '[name].js'
	},
	plugins: plugins,
	devtool: '#source-map',
	module: {
		loaders: [{
			test: /\.css$/,
			loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer?' +
				browsers
		}, {
			test: /\.less$/,
			loader: 'style!css?modules&importLoaders=1&localIdentName=[local]!autoprefixer?' +
				browsers + '!less'
		}, {
			test: /\.js?$/,
			loaders: ['react-hot', 'babel'],
			exclude: /node_modules/
		}, {
			test: /\.js$/,
			loader: 'babel',
			exclude: /node_modules/
		}]
	},
	resolve: {
		extensions: ['', '.js', '.less'],
		modulesDirectories: ["node_modules", "bower_components"]
	},
	devServer: {
		hot: true,
		quiet: false,
		colors: true,
		inline: true,
		compress: true,
		contentBase: "./app",
		host: '192.168.1.127',
		port: 8091,
		setup: function(app) {
			// Here you can access the Express app object and add your own custom middleware to it.
			// For example, to define custom handlers for some paths:
			// app.get('/some/path', function(req, res) {
			//   res.json({ custom: 'response' });
			// });
		},
		// proxy: {
		//   '/some/path*': {
		//     target: 'https://other-server.example.com',
		//     secure: false
		//   }
		// }
	}
};
