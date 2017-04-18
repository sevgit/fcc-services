import path from 'path';
import webpack from 'webpack';

export default {
	entry: [
	 'webpack-hot-middleware/client?reload=true',
		path.join(__dirname, '/client/index.js')],
	output: {
		path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
		{
			test: /\.js$/,
			include: path.join(__dirname, 'client'),
			loaders: ['babel-loader']
		}]
	},
	resolve: {
		extensions: ['.js']
	}
}