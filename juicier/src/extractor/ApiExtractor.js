const axios = require("axios");
const Bottleneck = require("bottleneck/es5");

class ApiExtractor {
  constructor(api, endpointPath, inputHandler, outputHandler, options) {
    this.inputHandler = inputHandler;
    this.outputHandler = outputHandler;
    this.limiter = new Bottleneck({
      maxConcurrent: 1,
      minTime: 300
    });
    this.api = api;
    this.endpointPath = endpointPath;
    this.options = options;
  }

  write(lines, index, total) {
    return this.limiter.schedule(() => {
      this.api
        .extractData(this.endpointPath, lines)
        .then(res => this.outputHandler.write(res.data))
        .then(() => console.log(`processed ${index + 1}/${total}`))
        .catch(error => {
          console.log(error);
        });
    });
  }

  async extract() {
    if (!this.inputHandler) {
      throw new Error("inputData must be defined and not null");
    }

    let readResults = await this.inputHandler.read();
    let lines = [];
    let writePromises = [];
    let index = 0;

    if (this.options.batchSize > readResults.length) {
      writePromises = this.write(readResults);
    } else {
      while (index < readResults.length) {
        lines.push(readResults[index]);
        if ((index + 1) % this.options.batchSize === 0) {
          writePromises.push(this.write(lines, index, readResults.length));
          lines = [];
        }
        index++;
      }

      if (lines.length > 0) {
        writePromises.push(this.write(lines, index, readResults.length));
      }
    }
    return Promise.all(writePromises);
  }
}

module.exports = ApiExtractor;
