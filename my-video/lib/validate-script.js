function validateScript(script) {
if (!script.metadata) {
throw new Error("metadata is missing");
}

if (!script.audio) {
throw new Error("audio is missing");
}

if (!script.video) {
throw new Error("video is missing");
}

if (!script.video.scenes) {
throw new Error("video.scenes is missing");
}

if (script.video.scenes.length === 0) {
throw new Error("No scenes found");
}
}

module.exports = validateScript;
