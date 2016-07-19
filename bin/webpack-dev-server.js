const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('../webpack.config');
const WebpackDevServer = require('webpack-dev-server');

// 添加热替换选项
webpackConfig.entry.app.push(
  `webpack-dev-server/client?http://localhost:3000/`,
  `webpack/hot/dev-server`
);

webpackConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin(),  //添加热替换
  new webpack.NoErrorsPlugin()
);

const server = new WebpackDevServer(webpack(webpackConfig), {
  contentBase : path.resolve(__dirname, 'src'),
  hot: true,
  progress: true,
  inline: true,
  historyApiFallback: true,
  noInfo      : false,
  lazy        : false,
  stats       : {
    color : true,
  }
});

server.listen('3000', 'localhost', () => {
  console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", 3000, 3000);
});
