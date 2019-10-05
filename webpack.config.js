const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

var config = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.[hash].js',
    path: __dirname + '/build',
    publicPath: '/',
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.scss$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
        include: /src/,
      },
    ],
  },

  plugins: [
    new CaseSensitivePathsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devServer = {
      open: true,
      historyApiFallback: true,
    };
  }

  return config;
};
