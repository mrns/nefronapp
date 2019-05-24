const mongoose = require("mongoose");
const Types = mongoose.Types;
const Food = require("../schema/FoodSchema.js");

class FoodModelTransformer {
  mutate(json) {
    if (!json || !json.foods) {
      throw new Error("missing foods json");
    }

    let models = [];
    json.foods.forEach(foodJson => {
      let model = new Food({
        _id: new Types.ObjectId(),
        ...foodJson.food
      });
      models.push(model);
    });

    return models;
  }
}

module.exports = FoodModelTransformer;
