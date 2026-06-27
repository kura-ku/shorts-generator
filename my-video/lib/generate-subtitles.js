const { execSync } = require("child_process");
const fs = require("fs");
const logger = require("./logger");

function generateSubtitles(episode) {
const subtitleDir = "public/subtitles";
const subtitleFile = `${subtitleDir}/${episode}.json`;

if (!fs.existsSync(subtitleDir)) {
fs.mkdirSync(subtitleDir, {
recursive: true,
});
}

if (fs.existsSync(subtitleFile)) {
logger.success("Using cached subtitles");
return subtitleFile;
}

logger.log("Subtitle", "Generating subtitles...");

execSync(
`python3 python/generate_subtitles.py ${episode}`,
{
stdio: "inherit",
}
);

logger.success("Subtitle completed");

return subtitleFile;
}

module.exports = generateSubtitles;
