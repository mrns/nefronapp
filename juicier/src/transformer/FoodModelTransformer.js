const mongoose = require("mongoose");
const Types = mongoose.Types;
const NSDAFood = require("../schema/NSDAFoodSchema.js");

class FoodModelTransformer {
  mutate(json) {
    if (!json || !json.foods) {
      throw new Error("missing foods json");
    }

    let models = [];
    json.foods.forEach(NSDAfoodJson => {
      let model = new NSDAFood({
        _id: new Types.ObjectId(),
        ...NSDAfoodJson.food
      });
      models.push(model);
    });

    return models;
  }
}

module.exports = FoodModelTransformer;
