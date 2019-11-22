var fs = require("fs");
var CsvReadableStream = require("csv-reader");

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
          let tempSubArray = temp.split(":");
          items[tempSubArray[0]] = tempSubArray[1];
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
};
