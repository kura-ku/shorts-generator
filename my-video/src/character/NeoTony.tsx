import React from "react";

import { Face } from "./Face";
import { EyeExpression } from "./Eyes";
import { EffectEngine, EffectType } from "./EffectEngine";
import { PoseEngine, PoseType } from "./PoseEngine";
import {
  AnimationEngine,
} from "./AnimationEngine";
import {
  EmotionLines,
  EmotionLineType,
} from "./EmotionLines";
import {
  Cheek,
  CheekType,
} from "./Cheek";


type Props = {
  expression?: EyeExpression;
  effect?: EffectType;
  pose?: PoseType;
  animation?:
  | "none"
  | "idle"
  | "walk"
  | "run"
  | "jump"
  | "shake";
  emotionLines?: EmotionLineType;
  cheek?: CheekType;
};

export const NeoTony: React.FC<Props> = ({
  expression = "neutral",
  effect = "none",
  pose = "idle",
  animation = "idle",
  emotionLines = "none",
  cheek = "none"
}) => {

  return (

    <svg
      width="320"
      height="420"
      viewBox="-160 -80 320 420"
    >

    <AnimationEngine
        animation={animation}
        >
        <Face
        expression={expression}
        />
        <Cheek
        type={cheek}
        />
        <EmotionLines
        type={emotionLines}
        />
        <PoseEngine pose={pose} />
        <EffectEngine effect={effect} />
    </AnimationEngine>
    </svg>

  );

};