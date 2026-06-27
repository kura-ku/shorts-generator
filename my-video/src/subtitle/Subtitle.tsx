import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from "remotion";

import subtitles from "../../public/subtitles/episode001.json";

export const Subtitle: React.FC = () => {
  const frame = useCurrentFrame();

  const currentTime = frame / 30;

  const currentIndex = subtitles.findIndex(
    (word: any) =>
      currentTime >= word.start &&
      currentTime <= word.end
  );

  if (currentIndex === -1) return null;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 220,
      }}
    >
      <div
        style={{
          width: 860,
          textAlign: "center",
          wordBreak: "break-word",
          fontSize: 66,
          fontWeight: "bold",
          lineHeight: 1.25,
        }}
      >
        {subtitles.map((word: any, index: number) => {

          const active = index === currentIndex;

          const scale = active
            ? interpolate(
                frame,
                [0, 3],
                [1.25, 1],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }
              )
            : 1;

          return (
            <span
              key={index}
              style={{
                display: "inline-block",
                marginRight: 10,
                color: active
                  ? "#FFD400"
                  : "#FFFFFF",
                transform: `scale(${scale})`,
                textShadow:
                  "4px 4px 8px rgba(0,0,0,0.8)",
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