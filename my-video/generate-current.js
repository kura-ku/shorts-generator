const fs = require("fs");

const episode = process.argv[2];

const source = `src/data/${episode}.json`;
const target = "src/data/current.json";

fs.copyFileSync(source, target);

console.log(`Current episode set to ${episode}`);
