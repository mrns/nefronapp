const fs = require("fs");
const readline = require("readline");

class FileInput {
  constructor(filePath, matcher) {
    if (!filePath) {
      throw new Error("filePath cannot be null");
    }

    this.filePath = filePath;
    this.matcher = matcher;
  }

  async read() {
    const fileStream = fs.createReadStream(this.filePath);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });

    let matches = [];

    for await (const line of rl) {
      matches.push(this.matcher.match(line));
    }

    return Promise.resolve(matches);
  }
}

module.exports = FileInput;
