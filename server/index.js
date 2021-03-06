import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev.js';

let app = express();
const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, { 
hot: true,
publicPath: webpackConfig.output.publigPath,
noInfo:true 
}));

app.use(webpackHotMiddleware(compiler));
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log("running"));