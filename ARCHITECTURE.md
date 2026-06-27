# Architecture

## Goal

Generate high-quality YouTube Shorts automatically from JSON.

Pipeline:

JSON
↓
Audio
↓
Subtitles
↓
Current Data
↓
Remotion Render
↓
Thumbnail
↓
Metadata
↓
Upload

---

## Folder Structure

build-video.js
lib/
python/
src/
public/
cache/
out/

---

## Engines

### Build Engine

Responsible for orchestration.

### Audio Engine

Generate master and scene audio.

### Subtitle Engine

Generate timestamps and render highlighted subtitles.

### Scene Engine

Switch scenes automatically.

### Render Engine

Render Remotion composition.

### Distribution Engine

Generate metadata and upload to YouTube/X.

---

## Rule

Each Engine must have a single responsibility.

No Engine may directly manipulate another Engine's internal state.
