const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MeasureSchema = new Schema({
  id: {
    type: "Number"
  },
  title: {
    type: "String"
  },
  authors: {
    type: "String"
  },
  vol: {
    type: "String"
  },
  iss: {
    type: "String"
  },
  year: {
    type: "Date"
  }
});

module.exports = MeasureSchema;
