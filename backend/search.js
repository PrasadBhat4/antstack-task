const fs = require("fs");

var exports = (module.exports = {});

exports.searchByPincode = searchTerm => {
  let rawData = fs.readFileSync("data.json");
  var data = JSON.parse(rawData);

  var jsonOutput = {};

  Object.keys(data).map(key => {
    var value = data[key].deliveryPincode;
    if (String(value).match(searchTerm)) {
      jsonOutput[key] = data[key];
    }
  });

  return jsonOutput;
};
