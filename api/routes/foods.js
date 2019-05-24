var express = require("express");
var router = express.Router();
const foods = require("../schema/FoodSchema.js");

/* GET users listing. */
router.get("/", function(req, res, next) {
  foods.foodlist(function(err, foods) {
    if (err) {
      return next(err);
    }

    res.send(foods);
  });
});

module.exports = router;
