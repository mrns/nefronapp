var assert = require("assert");
var chai = require("chai");
var sinon = require("sinon");
var FileInput = require("../src/input/FileInput.js");
var TextColumnMatcher = require("../src/matcher/TextColumnMatcher.js");

describe("FileInputTests", () => {
  it("constructor - throws when not passing a file path", () => {
    chai.expect(() => new FileInput()).to.throw("filePath cannot be null");
  });

  // it("read - emits one next event per line with specific data", async done => {
  //   let textColumnMatcher = new TextColumnMatcher([1], "~");
  //   let fileInput = new FileInput("./test/sample_data", textColumnMatcher);

  //   let readResult = await fileInput.read();
  //   console.log(readResult);
  //   assert.ok(readResult.some(v => v === "01001"));
  // });
});
