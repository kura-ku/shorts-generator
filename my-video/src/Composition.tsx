import {
  AbsoluteFill,
  Html5Audio ,
  interpolate,
  useCurrentFrame,
  staticFile,
} from "remotion";

import script from "./data/current.json";
import { NeoTony } from "./NeoTony";
import { SceneProps } from "./Props";
import { Background } from "./Background";
import { Subtitle } from "./Subtitle";

export const MyComposition = () => {
  const frame = useCurrentFrame();

const fps = 30;

const sceneDurations = script.video.scenes.map(
(s) => s.durationSeconds * fps
);

let currentSceneIndex = 0;
let sceneStart = 0;

for (let i = 0; i < sceneDurations.length; i++) {
const end = sceneStart + sceneDurations[i];

if (frame < end) {
currentSceneIndex = i;
break;
}

sceneStart = end;
}

const scene =
script.video.scenes[currentSceneIndex];


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

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Html5Audio
        src={staticFile(`audio/${script.audio.file}`)}
      />

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

      <Subtitle />
      
      <div
        style={{
          position: "absolute",
          bottom: 60,
          fontSize: 28,
          opacity: 0.5,
          zIndex: 20,
        }}
      >
        Scene {scene.scene} / {script.video.scenes.length}
      </div>
    </AbsoluteFill>
  );
};