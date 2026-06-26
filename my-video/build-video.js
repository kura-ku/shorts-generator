const logger = require("./lib/logger");

const generateAudio = require("./lib/generate-audio");
const updateCurrent = require("./lib/update-current");
const renderVideo = require("./lib/render-video");
const validateScript = require("./lib/validate-script");

const episode = process.argv[2];

if (!episode) {
console.error("Usage: npm run build-video -- episode001");
process.exit(1);
}

const script = require(`./episodes/${episode}.json`);

logger.log("Build", `Building ${episode}`);

validateScript(script);

generateAudio(script, episode);

updateCurrent(script, episode);

renderVideo(episode);

logger.success("Video completed");
