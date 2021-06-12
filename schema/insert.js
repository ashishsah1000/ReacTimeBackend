const mongo = require("mongoose");
const schema = mongo.Schema;
const objId = schema.ObjectId;

var newData = new schema({
  title: {
    type: String
  },
  data: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongo.model("Data", newData);
