var newData = require("../schema/insert.js");

var updateData = (Data) => {
  var update = new newData({
    title: Data,
    data: Data
  });
  update.save((err, callback) => {
    if (err) console.log(err);
    else console.log("added the 1 entery");
  });
};
module.exports = {
  process: updateData //Directly use as a function to add it
};
