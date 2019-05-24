const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MeasureSchema = require("./MeasureSchema.js");

const NutrientSchema = new Schema({
  nutrient_id: {
    type: "Number"
  },
  name: {
    type: "String"
  },
  group: {
    type: "String"
  },
  unit: {
    type: "String"
  },
  value: {
    type: "Number"
  },
  derivation: {
    type: "String"
  },
  sourcecode: {
    type: "Mixed"
  },
  dp: {
    type: "Number"
  },
  se: {
    type: "String"
  },
  measures: {
    type: [MeasureSchema]
  }
});

module.exports = NutrientSchema;
