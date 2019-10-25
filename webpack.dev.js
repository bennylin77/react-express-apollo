require('dotenv').config();
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge({
	mode: 'development',
	devtool: 'eval',
	entry: {
		app: ['webpack-hot-middleware/client'],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
				HOST: process.env.HOST,
				PORT: process.env.PORT,
				PROTOCOL: process.env.PROTOCOL,
			},
		}),
	],
}, common);
