const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const scriptPath = path.join(
  __dirname,
  "../src/data/episode001.json"
);

const data = JSON.parse(
  fs.readFileSync(scriptPath, "utf8")
);

const text = data.video.scenes
  .map((s) => s.narration)
  .join(" ");

const output = path.join(
  __dirname,
  "../public/audio/episode001.mp3"
);

const voice =
  data.audio?.voice ||
  "en-US-GuyNeural";

console.log("Generating audio...");
console.log(text);

execSync(
  `edge-tts --text "${text}" --voice "${voice}" --write-media "${output}"`,
  { stdio: "inherit" }
);

console.log("Done!");
console.log(output);