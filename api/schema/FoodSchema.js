const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const NutrientSchema = require("./NutrientSchema.js");
const SourceSchema = require("./SourceSchema.js");

const FoodSchema = new Schema({
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
    type: [NutrientSchema]
  },
  sources: {
    type: [SourceSchema]
  },
  footnotes: {
    type: "Array"
  },
  langual: {
    type: "Array"
  }
});

FoodSchema.statics.foodlist = function(cb) {
  this.find()
    .limit(20)
    .exec(function(err, foodList) {
      if (err) return cb(err);

      cb(null, foodList);
    });
};

FoodSchema.statics.searchNSDA = function(cb, query) {
  let regexp = `\"${query.split(" ").join('" "')}\"`;
  this.find({
    $text: {
      $search: new RegExp(regexp, "i")
    }
  })
    .limit(20)
    .exec(function(err, searchResults) {
      if (err) return cb(err);

      cb(null, searchResults);
    });
};

FoodSchema.path("desc.name").index({ text: true });

module.exports = mongoose.model("Food", FoodSchema);
