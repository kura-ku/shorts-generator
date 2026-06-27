const fs = require("fs");
const path = require("path");

function updateCurrentSubtitles(episode) {

    const source = path.join(
        __dirname,
        `../public/subtitles/${episode}.json`
    );

    const target = path.join(
        __dirname,
        "../public/subtitles/current.json"
    );

    if (!fs.existsSync(source)) {

        throw new Error(
            `Subtitle not found: ${source}`
        );

    }

    fs.copyFileSync(
        source,
        target
    );

    console.log(
        "✅ current subtitle updated"
    );

}

module.exports = updateCurrentSubtitles;