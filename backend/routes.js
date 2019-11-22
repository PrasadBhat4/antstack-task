var express = require("express");
var app = express();
const fs = require("fs");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.get("/dashboard", function(req, res) {
  let rawdata = fs.readFileSync("data.json");
  res.send(rawdata);
});

app.get("/2", function(req, res) {
  res.send("You just called the post method at '/hello'!\n");
});

app.listen(3010);
