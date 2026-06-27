import { Composition } from "remotion";

import { MyComposition } from "./Composition";
import { ThumbnailComposition } from "./ThumbnailComposition";

import script from "./data/current.json";

const fps = 30;

const durationInFrames = script.video.scenes.reduce(
  (total, scene) => total + scene.durationSeconds * fps,
  0
);

export const RemotionRoot = () => {
  return (
    <>

      <Composition
        id="MyComp"
        component={MyComposition}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1920}
      />

      <Composition
        id="Thumbnail"
        component={ThumbnailComposition}
        durationInFrames={1}
        fps={30}
        width={1080}
        height={1920}
      />

    </>
  );
};