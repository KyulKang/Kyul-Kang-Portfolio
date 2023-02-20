const path = require('path');

module.exports = {
  entry: ['./client/index.js'],
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  mode: 'production',
  devtool: 'source-map',
  watchOptions: {
    poll: true,
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: './public/[name][ext][query]',
        },
      },
    ],
  },
};
