const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src'); //__dirname 中的src目录，以此类推
const APP_FILE = path.resolve(APP_PATH, 'app'); //根目录文件app.jsx地址
const BUILD_PATH = path.resolve(ROOT_PATH, 'public'); //发布文件所存放的目录
const svgDirs = [
	require.resolve('antd-mobile').replace(/warn\.js$/, ''), // 1. 属于 antd-mobile 内置 svg 文件
	path.resolve(APP_PATH, 'style/svg') // 2. 自己私人的 svg 存放目录
];

const postcssLoader = {
	loader: 'postcss-loader',
	options: {
		plugins: (loader) => [
			autoprefixer({
				browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
			}),
			pxtorem({
				rootValue: 25,
				propWhiteList: []
			})
		]
	}
};


module.exports = {
	devtool: 'source-map', // or 'inline-source-map'
	entry: {
		app: APP_FILE,
		common: ['react', 'react-dom', 'react-router', 'redux', 'react-redux', 'redux-thunk', 'immutable', 'prop-types']
	},
	output: {
		filename: '[name].js',
		chunkFilename: '[name].min.js',
		path: BUILD_PATH,
		publicPath: '/public/'
	},

	module: {
		rules: [{
			test: /\.jsx$/,
			exclude: /node_modules/,
			use: 'babel-loader',
		}, {
			test: /\.(jpg|png|gif)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 8192
				}
			}]
		}, {
			test: /\.(svg)$/i,
			use: 'svg-sprite',
			include: svgDirs
		}, {
			test: /\.less$/i,
			use: ExtractTextPlugin.extract({
				fallbak: 'style-loader',
				use: ['css-loader', postcssLoader, 'less-loader']
			}),
		}, {
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallbak: 'style-loader',
				use: ['css-loader', postcssLoader, 'sass-loader']
			}),
			include: [APP_PATH]
		}, {
			test: /\.css$/i,
			use: ExtractTextPlugin.extract({
				fallbak: 'style-loader',
				use: ['css-loader', postcssLoader]
			})
		}]
	},
	resolve: {
		modules: [path.join(__dirname, '../node_modules')],
		extensions: ['', '.web.js', '.jsx', '.js', '.json'],
		alias: {
			public: path.resolve(__dirname, 'public/'),
			components: path.resolve(__dirname, 'src/components/'),
			myRedux: path.resolve(__dirname, 'src/redux/'),
			src: path.resolve(__dirname, 'src/')
		}
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development') //定义编译环境
			}
		}),
		new HtmlWebpackPlugin({
			filename: '../index.html', // 相对与BUILD_PATH
			template: path.resolve(APP_PATH, './index.html')
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			filename: 'common.min.js'
		}),
		new ExtractTextPlugin('[name].css')
	]
}