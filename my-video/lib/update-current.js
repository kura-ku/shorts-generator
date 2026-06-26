const fs = require("fs");
const path = require("path");
const logger = require("./logger");

function updateCurrent(script, episode) {
  const outputPath = path.join(
    __dirname,
    "../src/data/current.json"
  );

  fs.writeFileSync(
    outputPath,
    JSON.stringify(script, null, 2),
    "utf8"
  );

  logger.success("current.json updated");
}

module.exports = updateCurrent;