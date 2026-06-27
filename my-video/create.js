const { execSync } = require("child_process");

const episode = process.argv[2];

if (!episode) {
  console.log(
    "Usage: npm run create -- episode001"
  );
  process.exit(1);
}

const totalStart = Date.now();

function runStep(name, command) {

  console.log("");
  console.log("====================================");
  console.log(`🚀 ${name}`);
  console.log("====================================");

  const start = Date.now();

  execSync(command, {
    stdio: "inherit",
  });

  const end = Date.now();

  console.log(
    `✅ ${name} completed (${(
      (end - start) /
      1000
    ).toFixed(1)} sec)`
  );
}

runStep(
  "Build Video",
  `node build-video.js ${episode}`
);

runStep(
  "Publish",
  `node lib/publish.js ${episode}`
);

const totalEnd = Date.now();

console.log("");
console.log("====================================");
console.log("🎉 ALL COMPLETED");
console.log("====================================");

console.log(
  `Episode : ${episode}`
);

console.log(
  `Total Time : ${(
    (totalEnd - totalStart) /
    1000
  ).toFixed(1)} sec`
);

console.log("");
console.log(
  `📁 publish/${episode}`
);