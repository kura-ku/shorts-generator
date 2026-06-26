const { execSync } = require("child_process");

console.log("Installing npm packages...");
execSync("npm install", { stdio: "inherit" });

console.log("Installing Python packages...");
execSync(
  "python3 -m pip install -r requirements.txt",
  { stdio: "inherit" }
);

console.log("Setup completed.");