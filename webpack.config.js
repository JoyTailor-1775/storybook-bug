/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'iMenuComponentsLib',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        include: path.resolve(__dirname, 'src'),
        exclude: [
          path.resolve(__dirname, './node_modules'),
          path.resolve(__dirname, './src/tests'),
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      { test: /(\.css$)/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
      { test: /\.(woff|woff2|eot|ttf)$/, use: 'url-loader?limit=100000' },
      {
        test: /\.(jpg|png|svg)$/,
        use: 'file-loader?name=[name].[ext]&outputPath=./images/',
      },
    ],
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      utils: path.resolve(__dirname, 'src/utils/'),
      hooks: path.resolve(__dirname, 'src/hooks/'),
      helpers: path.resolve(__dirname, 'src/helpers/'),
      images: path.resolve(__dirname, 'src/images/'),
      icons: path.resolve(__dirname, 'src/icons/'),
      tests: path.resolve(__dirname, 'src/tests/'),
      types: path.resolve(__dirname, 'src/types/'),
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': 'ReactDOM',
    'react-jss': 'react-jss',
  },
  plugins: [new BundleAnalyzerPlugin({ analyzerMode: 'static' })],
};
