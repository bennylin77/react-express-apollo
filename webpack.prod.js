require('dotenv').config();
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
				HOST: process.env.HOST,
				PORT: process.env.PORT,	
				PROTOCOL: process.env.PROTOCOL,
			},
		}),
		new UglifyJSPlugin({
			cache: true,
			sourceMap: true,
			parallel: true,
		}),
	],
});
