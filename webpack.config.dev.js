import webpack from "webpack";
import path from "path";
import CircularDependencyPlugin from "circular-dependency-plugin";
import glob from "glob";

export default {
  debug: true,
  devtool: "inline-source-map",
  noInfo: false,
  entry: {
    app: [
      "eventsource-polyfill", // necessary for hot reloading with IE
      "webpack-hot-middleware/client?reload=true", //note that it reloads the page if hot module reloading fails.
      "./src/index"
    ],
    test: glob.sync("./src/**/*.js")
  },
  target: "web",
  output: {
    path: path.join(__dirname, "dist"), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: "/",
    filename: "[name]_bundle.js"
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  devServer: {
    contentBase: "./src"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new CircularDependencyPlugin({
      exclude: /.*node_modules.*/
    }),
    new webpack.ProvidePlugin({
      jQuery: "jquery", // Add window.JQuery
      $: "jquery", // Add window.$
      jquery: "jquery" // Add window.jquery
    })
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, "src"), loaders: ["babel"]},
      {test: /\.json$/, loader: "json"},
      {test: /(\.css)$/, loaders: ["style", "css"]},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.(woff|woff2)(\?.*$|$)$/, loader: "url?prefix=font/&limit=5000"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"},
      {test: /tether\.js$/, loader: "expose?Tether"} // Add window.Tether
    ]
  }
};
