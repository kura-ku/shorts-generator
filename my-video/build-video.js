const fs = require("fs");
const { execSync } = require("child_process");

const episode = process.argv[2];

if (!episode) {
console.error(
"Usage: node build-video.js episode002"
);
process.exit(1);
}

const jsonPath = `src/data/${episode}.json`;

if (!fs.existsSync(jsonPath)) {
console.error(`Missing: ${jsonPath}`);
process.exit(1);
}

const script = JSON.parse(
fs.readFileSync(jsonPath, "utf8")
);

const narration = script.video.scenes
.map((s) => s.narration)
.join(" ");

const mp3File = `${episode}.mp3`;

console.log("Generating audio...");

execSync(
`edge-tts -t "${narration.replace(/"/g, "")}" -v en-US-GuyNeural --write-media public/audio/${mp3File}`,
{ stdio: "inherit" }
);

console.log("Updating current.json...");

fs.copyFileSync(
jsonPath,
"src/data/current.json"
);

console.log("Rendering video...");

execSync(
`npx remotion render MyComp out/${episode}.mp4`,
{ stdio: "inherit" }
);

console.log(`Done: out/${episode}.mp4`);
