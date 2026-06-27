const fs = require("fs");
const path = require("path");

const episode = process.argv[2];
const topic = process.argv.slice(3).join(" ");

if (!episode || !topic) {
  console.log(
    'Usage: npm run draft -- episode002 "Why smart people stay broke"'
  );
  process.exit(1);
}

const templatePath = path.join(
  __dirname,
  "../episodes/episode-template.json"
);

const outputPath = path.join(
  __dirname,
  `../episodes/${episode}.json`
);

if (fs.existsSync(outputPath)) {
  console.log("Episode already exists.");
  process.exit(1);
}

const template = JSON.parse(
  fs.readFileSync(templatePath, "utf8")
);

template.metadata.title = topic;
template.metadata.topic = topic;

template.video.scenes.forEach(
(scene,index)=>{

scene.narration =
generated.scenes[index].narration;

scene.animation =
generated.scenes[index].animation;

scene.visual.background =
generated.scenes[index].background;

});

fs.writeFileSync(
  outputPath,
  JSON.stringify(template, null, 2),
  "utf8"
);

console.log(`✅ Draft created: ${episode}.json`);