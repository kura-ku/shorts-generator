import React from "react";

import {
  AbsoluteFill,
  useCurrentFrame,
} from "remotion";

import subtitles from "../../public/subtitles/episode001.json";

import { SubtitleStyle } from "./SubtitleStyle";

import {
  getSubtitleState,
} from "./SubtitleEngine";

import {
  getWordScale,
  getWordOpacity,
} from "./SubtitleAnimation";

export const Subtitle = () => {

  const frame = useCurrentFrame();

  const currentTime = frame / 30;

  const state = getSubtitleState(
    subtitles,
    currentTime
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 150,
        pointerEvents: "none",
      }}
    >
      <div style={SubtitleStyle.container}>
        {subtitles.map((word, index) => {

          const active =
            index === state.currentIndex;

          const scale =
            getWordScale(active, frame);

          const opacity =
            getWordOpacity(active);

          return (
            <span
              key={index}
              style={{
                display: "inline-block",
                marginRight: 10,
                transform: `scale(${scale})`,
                opacity,

                ...(active
                  ? SubtitleStyle.currentWord
                  : index < state.currentIndex
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