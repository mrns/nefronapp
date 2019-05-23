const mongoose = require("mongoose");
const Types = mongoose.Types;
const FoodSchema = require("../schema/FoodSchema.js");
const FoodModel = mongoose.model("Food", FoodSchema);

class FoodModelTransformer {
  mutate(json) {
    if (!json || !json.foods) {
      throw new Error("missing foods json");
    }

    let models = [];
    json.foods.forEach(foodJson => {
      let model = new FoodModel({
        _id: new Types.ObjectId(),
        ...foodJson.food
      });
      models.push(model);
    });

    return models;
  }
}

module.exports = FoodModelTransformer;
