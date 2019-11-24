var express = require("express");
var csvReader = require("./data");
const search = require("./search");
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

app.get("/", function (req, res) {
  var response1 = csvReader.readCsvFile();
  res.send(response1);
});

app.get("/dashboard", function (req, res) {
  let rawdata = fs.readFileSync("data.json");
  res.send(rawdata);
});

app.get("/pincode/:pin", function (req, res) {
  var response = search.searchByPincode(req.params.pin);
  res.send(response);
});

module.exports = app;
