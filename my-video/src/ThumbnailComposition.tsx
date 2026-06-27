import { AbsoluteFill } from "remotion";

import script from "./data/current.json";
import { Background } from "./Background";
import { NeoTony } from "./NeoTony";

export const ThumbnailComposition = () => {

  const scene = script.video.scenes[0];

  return (

    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Background
        background={scene.visual.background}
      />

      <div
        style={{
          transform: "scale(1.5)",
          marginBottom: 220,
        }}
      >
        <NeoTony animation="talk" />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 160,
          width: "90%",
          textAlign: "center",
          fontSize: 84,
          fontWeight: "bold",
          color: "#FFD400",
          textShadow:
            "6px 6px 12px rgba(0,0,0,.8)",
        }}
      >
        {script.metadata.topic}
      </div>

    </AbsoluteFill>

  );

};