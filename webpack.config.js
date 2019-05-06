const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const path = require("path");


const getConfig = name =>  (env = {}) => ({
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `index.${name}.js`
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", options: {envName: name} }]
  },
  plugins: [
    env.analyze && new BundleAnalyzerPlugin(),
  ].filter(Boolean)
});

module.exports = [getConfig('modern'), getConfig('legacy')];
