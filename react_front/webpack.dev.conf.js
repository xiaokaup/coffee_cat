
const base = require('./webpack.config.js');
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = merge(base, {
	mode: "development",
	devServer: {
		contentBase: './dist',
		host: '0.0.0.0',
		port: '3000',
		inline: true,
		historyApiFallback: true,
		hot: true,
		overlay: true,
    	open: true
	},
	devtool: 'source-map',
	plugins: [
       //定义全局变量
        new webpack.DefinePlugin({
         //这里必须要解析成字符串进行判断，不然将会被识别为一个变量
			'APP_NODE_ENV': JSON.stringify('dev'),
			'APP_BACK_ENDPOINT': JSON.stringify('http://localhost:8000')
        })
    ]
});

