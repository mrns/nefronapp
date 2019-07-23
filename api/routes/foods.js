var express = require("express");
var foods = express.Router();
const foodSchema = require("../schema/FoodSchema.js");
const nsda = require("./nsda");

/* GET users listing. */
foods.get("/", function(req, res, next) {
  foodSchema.foodlist(function(err, foodList) {
    if (err) {
      return next(err);
    }

    res.send(foodList);
  });
});

foods.use("/nsda", nsda);

module.exports = foods;
