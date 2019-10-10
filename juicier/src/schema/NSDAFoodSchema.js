const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const NSDANutrientSchema = require("./NSDANutrientSchema.js");
const NSDASourceSchema = require("./NSDASourceSchema.js");

const NSDAFoodSchema = new Schema({
  _id: ObjectId,
  sr: {
    type: "String"
  },
  type: {
    type: "String"
  },
  desc: {
    ndbno: {
      type: "String"
    },
    name: {
      type: "String"
    },
    sd: {
      type: "String"
    },
    fg: {
      type: "String"
    },
    sn: {
      type: "String"
    },
    cn: {
      type: "String"
    },
    manu: {
      type: "String"
    },
    nf: {
      type: "Number"
    },
    cf: {
      type: "Number"
    },
    ff: {
      type: "Number"
    },
    pf: {
      type: "Number"
    },
    r: {
      type: "String"
    },
    rd: {
      type: "String"
    },
    ds: {
      type: "String"
    },
    ru: {
      type: "String"
    }
  },
  nutrients: {
    type: [NSDANutrientSchema]
  },
  sources: {
    type: [NSDASourceSchema]
  },
  footnotes: {
    type: "Array"
  },
  langual: {
    type: "Array"
  }
});

NSDAFoodSchema.statics.foodlist = function(cb) {
  this.find()
    .limit(20)
    .exec(function(err, users) {
      if (err) return cb(err);

      cb(null, users);
    });
};

module.exports = mongoose.model("NSDAFood", NSDAFoodSchema);
