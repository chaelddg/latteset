const express    = require('express');
const rdb        = require('rethinkdbdash');
const bodyParser = require('body-parser');
const path       = require('path');
const chalk      = require('chalk');

const app = express();
const router  = express.Router();

const conn = rdb({
	port: 28015,
	host:	'localhost',
	db: 	'rsos'
});

router.get('/menus', (req, res) => {
	conn.table('menu_types').run()
		.then(response => {
			res.send(response);
		})
		.catch(err => err);
});

app
  .use('/api', router);

function createWebpackMiddleware(compiler, publicPath, middleware) {
  return middleware(compiler, {
    noInfo: true,
    publicPath,
    silent: true,
		hot: true,
    stats: 'errors-only',
  });
}

if (process.env.NODE_ENV !== 'production') {
  const webpack              = require('webpack');
	const webpackDevMiddleware = require('webpack-dev-middleware');
	const webpackHotMiddleware = require('webpack-hot-middleware');
	const history 						 = require('connect-history-api-fallback');

	const webpackConfig        = require('./webpack.config.js');

	const compiler             = webpack(webpackConfig);

	const middleware 					 = createWebpackMiddleware(compiler, webpackConfig.output.publicPath, webpackDevMiddleware);

  app.use(middleware);
	app.use(history({
		disableDotRule: true,
		index: '/dist/index.html'
	}));
	app.use(middleware);
	app.use(webpackHotMiddleware(compiler, {
		reload: true
	}));

} else {
	app.use(express.static(path.join(__dirname, '/dist')));
	app.get('/*', function(req, res) {
	  res.sendFile(path.join(__dirname + '/dist/index.html'));
	});
}

app.listen(3000, function() {
	console.log(chalk.bold.green('[ =====   App running on port 3000   ===== ]'));
	console.log(chalk.bold.green('[ ===== Wait for the Build to finish ===== ]'));
});
