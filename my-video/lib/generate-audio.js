const { execSync } = require("child_process");
const fs = require("fs");
const logger = require("./logger");

function generateAudio(script, episode) {
// -----------------------------
// Master Audio
// -----------------------------
const narration = script.video.scenes
.map((scene) => scene.narration)
.join(" ");

const masterOutput = `public/audio/${episode}.mp3`;

if (fs.existsSync(masterOutput)) {
logger.success("Using cached master audio");
} else {
logger.log("Audio", "Generating master audio...");

execSync(
  `python3 -m edge_tts -t "${narration.replace(/"/g, "")}" -v ${script.audio.voice} --rate "${script.audio.rate}" --pitch "${script.audio.pitch}" --write-media ${masterOutput}`,
  {
    stdio: "inherit",
  }
);

logger.success("Master audio completed");

}

// -----------------------------
// Scene Audio
// -----------------------------
logger.log("Audio", "Generating scene audio...");

script.video.scenes.forEach((scene, index) => {
const output = `public/audio/${episode}_scene${index + 1}.mp3`;

if (fs.existsSync(output)) {
  logger.log("Audio", `Using cached Scene ${index + 1}`);
  return;
}

execSync(
  `python3 -m edge_tts -t "${scene.narration.replace(/"/g, "")}" -v ${script.audio.voice} --rate "${script.audio.rate}" --pitch "${script.audio.pitch}" --write-media ${output}`,
  {
    stdio: "inherit",
  }
);

logger.log("Audio", `Scene ${index + 1} completed`);

});

logger.success("All audio completed");

return masterOutput;
}

module.exports = generateAudio;
