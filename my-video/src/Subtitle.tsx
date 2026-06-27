import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import subtitles from "./../public/subtitles/episode001.json";

export const Subtitle: React.FC = () => {
  const frame = useCurrentFrame();

  const currentTime = frame / 30;

  const currentWord = subtitles.find(
    (word: any) =>
      currentTime >= word.start &&
      currentTime <= word.end
  );

  if (!currentWord) return null;

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
          color: "#ffff00",
          fontSize: 70,
          fontWeight: "bold",
          textShadow: "4px 4px 8px black",
        }}
      >
        {currentWord.word}
      </div>
    </AbsoluteFill>
  );
};