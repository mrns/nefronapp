const program = require("commander");
const FileInput = require("../src/input/FileInput.js");
const ApiExtractor = require("./extractor/ApiExtractor.js");
const TextColumnMatcher = require("../src/matcher/TextColumnMatcher.js");
const MongooseOutput = require("./output/MongooseOutput.js");
const FoodModelTransformer = require("./transformer/FoodModelTransformer.js");
const NSDAApi = require("./api/NSDAApi.js");

program
  .version("0.1.0")
  .option("-c, --config_file [config_file]", "Config file")
  .option("-u, --target_url [target_url]", "Target URL")
  .parse(process.argv);

console.log("running juicier:");

let apiExtractor = new ApiExtractor(
  new NSDAApi(process.env["NEFRONAPP_NSDA_API_KEY"], "v2"),
  "reports",
  new FileInput(
    "./../docs/SR-Leg_ASC/FOOD_DES.txt",
    new TextColumnMatcher([1], "~")
  ),
  new MongooseOutput(
    process.env["NEFRONAPP_DB_CONNECTION_STRING"],
    new FoodModelTransformer()
  ),
  { sessionId: 1, batchSize: 25 }
);

apiExtractor.extract();
