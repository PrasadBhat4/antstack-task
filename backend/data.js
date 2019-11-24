var fs = require("fs");
var CsvReadableStream = require("csv-reader");

function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }

  return true;
}

var exports = (module.exports = {});
exports.readCsvFile = () => {
  var jsonMainObject = {};

  var inputStream = fs.createReadStream("../public/data.csv", "utf8");
  var jsonMainObject = {};

  inputStream
    .pipe(
      CsvReadableStream({
        parseNumbers: true,
        parseBooleans: true,
        trim: true,
        skipHeader: true
      })
    )
    .on("data", row => {
      var itemsArray = row[4].split(";");
      var items = {};
      itemsArray.forEach(temp => {
        if (temp !== "") {
          var tempSubArray = temp.split(":");
          if (items.hasOwnProperty(tempSubArray[0])) {
            let value = items[tempSubArray[0]] + parseInt(tempSubArray[1]);
            items[tempSubArray[0]] = value;
          } else items[tempSubArray[0]] = parseInt(tempSubArray[1]);
        }
      });

      let orderId = row[0];
      let customerId = row[1];
      let deliveryPincode = row[2];
      let orderDate = row[3];
      var jObject = {
        orderId: orderId,
        customerId: customerId,
        deliveryPincode: deliveryPincode,
        orderDate: orderDate,
        items: items
      };

      jsonMainObject[orderId] = jObject;
    })
    .on("end", data => {
      fs.writeFile("data.json", JSON.stringify(jsonMainObject), err => {
        if (err) {
          return console.log(err);
        }
      });
      console.log("No more rows!");
    });

  return "Hello World";
};
