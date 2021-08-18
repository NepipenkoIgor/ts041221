const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
	return {
		mode: 'none',
		entry: path.resolve(__dirname, 'src'),
		output: {
			filename: '[name].bundle.js',
			path: path.resolve(__dirname, 'dist'),
		},
		devtool: 'source-map',
		resolve: {
			extensions: ['.ts', '.js', '.json'],
		},
		module: {
			rules: [
				{ test: /\.ts$/, loader: 'ts-loader' },
				{ test: /\.css$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'src', 'index.html'),
			}),
		],
	};
};
