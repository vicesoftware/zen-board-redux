import express from "express";
import webpack from "webpack";
import path from "path";
import config from "../webpack.config.dev";
import open from "open";

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

console.log("Setting up routes");

if (process.env.NODE_ENV !== "production") {
  app.get("/test", function(req, res) {
    console.log("Adding /test");
    res.sendFile(path.join( __dirname, "../src/test.html"));
  });

  app.get("/mocha.js", function(req, res) {
    console.log("Adding /mocha.js");
    res.sendFile(path.join( __dirname, "../node_modules/mocha/mocha.js"));
  });
}

app.get("*", function(req, res) {
  res.sendFile(path.join( __dirname, "../src/index.html"));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
