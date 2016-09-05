import express from "express";
import path from "path";
import open from "open";

/* eslint-disable no-console */

const port = 3000;
const app = express();

console.log("Setting up routes");

console.log("app.use: ", app.use);

app.use(express.static("dist"));

app.get("*", function(req, res) {
  res.sendFile(path.join( __dirname, "../dist/index.html"));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
