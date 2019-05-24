const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MeasureSchema = new Schema({
  label: {
    type: "String"
  },
  eqv: {
    type: "Number"
  },
  eunit: {
    type: "String"
  },
  qty: {
    type: "Number"
  },
  value: {
    type: "Number"
  }
});

module.exports = MeasureSchema;
