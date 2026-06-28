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
import { Subtitle } from "./subtitle/Subtitle";

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
  [0, 90],
  [1.00, 1.05],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }
  );

  const direction =
  currentSceneIndex % 2 === 0
    ? 1
    : -1;

  const translateX = interpolate(
  sceneFrame,
  [0, 90],
  [0, direction * 18],
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

      {/* <Html5Audio
        src={staticFile("bgm/main.mp3")}
        volume={0.12}
      /> */}
      
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
        {script.content.topic}
      </div>

      <div
        style={{
          transform: `
          translateX(${translateX}px)
          scale(${zoom})
          `,
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