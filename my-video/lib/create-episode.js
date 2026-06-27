const fs = require("fs");
const path = require("path");

const episode = process.argv[2];

if (!episode) {
  console.log(
    "Usage: npm run new -- episode002"
  );
  process.exit(1);
}

const template = path.join(
  __dirname,
  "../episodes/episode-template.json"
);

const output = path.join(
  __dirname,
  `../episodes/${episode}.json`
);

if (fs.existsSync(output)) {
  console.log("Episode already exists.");
  process.exit(1);
}

fs.copyFileSync(template, output);

console.log(
  `✅ Created ${episode}.json`
);