from faster_whisper import WhisperModel
import json
import os
import sys

episode = sys.argv[1]

audio_file = f"public/audio/{episode}.mp3"

output_dir = "public/subtitles"
os.makedirs(output_dir, exist_ok=True)

output_file = f"{output_dir}/{episode}.json"

model = WhisperModel(
    "small",
    device="cpu",
    compute_type="int8"
)

segments, info = model.transcribe(
    audio_file,
    word_timestamps=True
)

words = []

for segment in segments:
    if segment.words is None:
        continue

    for word in segment.words:
        words.append({
            "word": word.word.strip(),
            "start": round(word.start, 3),
            "end": round(word.end, 3)
        })

with open(output_file, "w", encoding="utf-8") as f:
    json.dump(
        words,
        f,
        indent=2,
        ensure_ascii=False
    )

print("Subtitle completed")