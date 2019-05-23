const mongoose = require("mongoose");

class MongooseOutput {
  constructor(connectionString, transformer) {
    this.connectionString = connectionString;
    this.transformer = transformer;

    mongoose.connect(connectionString, { useNewUrlParser: true });
  }

  write(data) {
    let models = this.transformer.mutate(data);
    let saveModels = models.map(model => model.save());
    return Promise.all(saveModels);
  }
}

module.exports = MongooseOutput;
