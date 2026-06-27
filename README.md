# AI Shorts Generator

Generate high-quality YouTube Shorts automatically from a single JSON file.

This project focuses on reproducibility, automation, and zero-cost development as much as possible.

---

# Features

* JSON-based video generation
* AI voice generation (Edge-TTS)
* Scene-based narration
* Faster-Whisper subtitle generation
* Word-level highlighted subtitles
* Automatic scene switching
* Remotion video rendering
* Thumbnail generation (planned)
* Metadata generation (planned)
* YouTube upload (planned)
* X upload (planned)

---

# Pipeline

```text
Episode JSON
      │
      ▼
Generate Audio
      ▼
Generate Scene Audio
      ▼
Generate Subtitles
      ▼
Update current.json
      ▼
Render Video
      ▼
Generate Thumbnail
      ▼
Generate Metadata
      ▼
Upload
```

---

# Project Structure

```text
shorts-generator/

README.md
ROADMAP.md
ARCHITECTURE.md
CONTRIBUTING.md
AGENTS.md

my-video/
    build-video.js
    package.json
    requirements.txt

    src/
    lib/
    python/
    public/
```

---

# Quick Start

Install dependencies

```bash
npm install
python3 -m pip install -r requirements.txt
```

Generate a video

```bash
npm run build-video -- episode001
```

---

# Roadmap

## Version 1

* Build Engine
* Audio Engine
* Subtitle Engine
* Scene Engine
* Render Engine
* Distribution Engine

## Version 2

* Movie Mode
* TikTok Mode
* Instagram Mode
* Theme Engine
* AI B-roll

---

# Technologies

* Remotion
* React
* Node.js
* Faster-Whisper
* Edge-TTS
* FFmpeg

---

# Philosophy

This project prioritizes:

* Reproducibility
* Automation
* Maintainability
* Modular architecture
* Open Source

Every major feature is separated into independent Engines.

---

# License

MIT License
