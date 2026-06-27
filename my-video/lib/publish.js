const fs = require("fs");
const path = require("path");

const generateThumbnail = require("./generate-thumbnail");
const episode = process.argv[2];

if (!episode) {
  console.log(
    "Usage: npm run publish -- episode001"
  );
  process.exit(1);
}

const script = require(
  `../episodes/${episode}.json`
);

const publishDir = path.join(
  __dirname,
  `../publish/${episode}`
);

fs.mkdirSync(
  publishDir,
  { recursive: true }
);

// --------------------
// Video
// --------------------

const sourceVideo = path.join(
  __dirname,
  `../out/${episode}.mp4`
);

const targetVideo = path.join(
  publishDir,
  `${episode}.mp4`
);

if (fs.existsSync(sourceVideo)) {
  fs.copyFileSync(
    sourceVideo,
    targetVideo
  );
}

// --------------------
// Title
// --------------------

fs.writeFileSync(
  path.join(
    publishDir,
    "youtube-title.txt"
  ),
  script.content.title
);

// --------------------
// Description
// --------------------

const description =
`${script.content.description}

${script.content.hashtags
  .map(tag => "#" + tag)
  .join(" ")}`;

fs.writeFileSync(
  path.join(
    publishDir,
    "youtube-description.txt"
  ),
  description
);

// --------------------
// Hashtags
// --------------------

fs.writeFileSync(
  path.join(
    publishDir,
    "hashtags.txt"
  ),
  script.content.tags
    .map(tag => "#" + tag)
    .join("\n")
);

// --------------------
// Checklist
// --------------------

fs.writeFileSync(
  path.join(
    publishDir,
    "checklist.md"
  ),
`# Upload Checklist

- [ ] Watch video
- [ ] Check thumbnail
- [ ] Upload to YouTube
- [ ] Upload to X
`
);

generateThumbnail(episode);

console.log(
  `✅ Publish package created: publish/${episode}`
);