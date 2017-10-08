const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// TODO : apply vendor split to minimize bundle size
const VENDOR_LIBS = [
  "react",
  "react-dom",
	"axios"
];

module.exports = {
  entry: {
    bundle: [
			'babel-polyfill',
			'react-hot-loader/patch',
			'webpack-hot-middleware/client?noInfo=false',
			'./src/index.js'
		]
  },
  output: {
    path: path.join(__dirname, 'dist'),
		publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
	devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
		new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
