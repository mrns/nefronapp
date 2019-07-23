var express = require("express");
var nsda = express.Router();
const foodSchema = require("../schema/FoodSchema.js");

/* GET users listing. */
nsda.post("/search", function(req, res, next) {
  const query = req.body.query;
  if (query.length < 3) {
    res.status(400).send("Query length must be greater than 3");
    return;
  }

  foodSchema.searchNSDA(function(err, searchResults) {
    if (err) {
      return next(err);
    }

    res.send(searchResults);
  }, query);
});

module.exports = nsda;
