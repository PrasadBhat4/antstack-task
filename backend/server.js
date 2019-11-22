var express = require("express");
var csvReader = require("./data");
var app = express();

app.get("/", function(req, res) {
  var response1 = csvReader.readCsvFile();
  console.log("Hello");
  res.send(response1);
});

var server = app.listen(3005, function() {});
