const { execSync } = require("child_process");
const logger = require("./logger");

function renderVideo(episode) {

  logger.log("Render", "Rendering video...");

  execSync(
    `npx remotion render src/index.ts MyComp out/${episode}.mp4`,
    {
      stdio: "inherit",
      cwd: process.cwd(),
    }
  );

  logger.success("Render completed");
}

module.exports = renderVideo;