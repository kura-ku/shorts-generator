import {
  AbsoluteFill,
  Audio,
  interpolate,
  useCurrentFrame,
} from "remotion";

import script from "./data/episode001.json";
import { NeoTony } from "./NeoTony";
import { SceneProps } from "./Props";
import { Background } from "./Background";

export const MyComposition = () => {
  const frame = useCurrentFrame();

  let scene = script.video.scenes[0];
  let sceneStart = 0;

  if (frame >= 240 && frame < 510) {
    scene = script.video.scenes[1];
    sceneStart = 240;
  }

  if (frame >= 510 && frame < 780) {
    scene = script.video.scenes[2];
    sceneStart = 510;
  }

  if (frame >= 780) {
    scene = script.video.scenes[3];
    sceneStart = 780;
  }

  const sceneFrame = frame - sceneStart;

  const zoom = interpolate(
    sceneFrame,
    [0, 120],
    [1, 1.08],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const textScale = interpolate(
    sceneFrame,
    [0, 20],
    [0.5, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Audio src="/audio/episode001.mp3" />

      <Background
        background={scene.visual.background}
      />

      <div
        style={{
          position: "absolute",
          top: 70,
          width: "90%",
          textAlign: "center",
          fontSize: 70,
          fontWeight: "bold",
          zIndex: 20,
        }}
      >
        {script.metadata.topic}
      </div>

      <div
        style={{
          transform: `scale(${zoom})`,
          zIndex: 10,
        }}
      >
        <NeoTony animation={scene.animation} />
      </div>

      <SceneProps
        propsList={scene.visual.props}
        frame={sceneFrame}
      />

      <div
        style={{
          position: "absolute",
          bottom: 180,
          width: "85%",
          textAlign: "center",
          fontSize: 42,
          fontWeight: 600,
          lineHeight: 1.4,
          zIndex: 20,
          transform: `scale(${textScale})`,
        }}
      >
        {scene.narration}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 60,
          fontSize: 28,
          opacity: 0.5,
          zIndex: 20,
        }}
      >
        Scene {scene.scene} / 4
      </div>
    </AbsoluteFill>
  );
};