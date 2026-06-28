import {
  AbsoluteFill,
  useCurrentFrame,
} from "remotion";

import subtitles from "../../public/subtitles/current.json";

import { SubtitleStyle } from "./SubtitleStyle";
import { getSubtitleState } from "./SubtitleEngine";
import {
  getWordScale,
  getWordOpacity,
} from "./SubtitleAnimation";

export const Subtitle = () => {

  const frame = useCurrentFrame();

  const fps = 30;

  const currentTime = frame / fps;

  const state = getSubtitleState(
    subtitles,
    currentTime
  );

  const start = Math.max(
    0,
    state.currentIndex - 2
  );

  const end = Math.min(
    subtitles.length,
    state.currentIndex + 3
  );

  const visibleWords =
    state.currentIndex < 0
      ? []
      : subtitles.slice(start, end);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 220,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          ...SubtitleStyle.container,
          maxWidth: 860,
        }}
      >
        {visibleWords.map((word, i) => {

          const index = start + i;

          const active =
            index === state.currentIndex;

          return (

            <span
              key={index}
              style={{
                display: "inline",
                marginRight: 10,

                transform: `scale(${getWordScale(
                  active,
                  frame
                )})`,

                opacity:
                  getWordOpacity(active),

                ...(active
                  ? SubtitleStyle.currentWord
                  : index <
                    state.currentIndex
                  ? SubtitleStyle.previousWord
                  : SubtitleStyle.nextWord),

              }}
            >

              {word.word}

            </span>

          );

        })}
      </div>
    </AbsoluteFill>
  );

};