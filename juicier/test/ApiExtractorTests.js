var assert = require("assert");
var chai = require("chai");
var ApiExtractor = require("../src/extractor/ApiExtractor.js");
var ArrayInput = require("../src/input/ArrayInput.js");
var ConsoleOutput = require("../src/output/ConsoleOutput.js");
var moxios = require("moxios");
var sinon = require("sinon");

describe("ApiExtractorTests", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("generateTargetUrl - throws when not passing an array", () => {
    let inputData = [["url", "sample", "1"]];
    let apiScraper = new ApiExtractor(
      "test-{0}-{1}-{2}",
      new ArrayInput(inputData)
    );
    chai
      .expect(() => apiScraper.generateTargetUrl(1))
      .to.throw("data must be of type Array");
  });

  it("generateTargetUrl - returns a url based on incoming input and templateUrl", () => {
    let inputData = [["url", "sample", "1"]];
    let apiScraper = new ApiExtractor(
      "test-{0}-{1}-{2}",
      new ArrayInput(inputData)
    );
    let targetUrl = apiScraper.generateTargetUrl(inputData[0]);

    assert.equal(targetUrl, "test-url-sample-1");
  });

  it("scrap - target url is invoked", done => {
    let inputData = [["url"]];
    let inputHandler = new ArrayInput(inputData);
    let outputHandler = new ConsoleOutput();
    let apiExtractor = new ApiExtractor(
      "test-{0}",
      inputHandler,
      outputHandler
    );
    let onFulfilled = sinon.spy(outputHandler, "write");

    moxios.stubRequest("test-url", {
      status: 200
    });

    apiExtractor.extract();

    moxios.wait(function() {
      assert.equal(onFulfilled.called, true);
      done();
    });
  });
});
