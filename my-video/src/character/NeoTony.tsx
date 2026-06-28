import React from "react";

import { Face } from "./Face";
import { EyeExpression } from "./Eyes";

import { EffectEngine, EffectType } from "./EffectEngine";
import { PoseEngine, PoseType } from "./PoseEngine";
import { AnimationEngine } from "./AnimationEngine";

import {
  EmotionLines,
  EmotionLineType,
} from "./EmotionLines";

import {
  Cheek,
  CheekType,
} from "./Cheek";

import { EyeHighlight } from "./EyeHighlight";
import { Shadow } from "./Shadow";
import { Accessory, AccessoryType } from "./Accessory";
import { Hair, HairStyle } from "./Hair";
import {
  CharacterTheme,
  getTheme,
} from "./ThemeEngine";

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
  accessory?: AccessoryType;
  theme?: CharacterTheme;
  hair?: HairStyle;
};

export const NeoTony: React.FC<Props> = ({
  expression = "neutral",
  effect = "none",
  pose = "idle",
  animation = "idle",
  emotionLines = "none",
  cheek = "none",
  accessory = "none",
  theme = "neoTony",
  hair = "default"
}) => {

  const shadowScale =
    animation === "jump"
      ? 0.6
      : 1;
  const selectedTheme = getTheme(theme);

  const finalExpression =
    expression ?? selectedTheme.expression;

  const finalAccessory =
    accessory === "none"
      ? selectedTheme.accessory
      : accessory;

  const finalHair =
    hair === "default"
      ? selectedTheme.hair
      : hair;

  return (

    <svg
      width={320}
      height={420}
      viewBox="-160 -80 320 420"
    >

      <Shadow
        scale={shadowScale}
      />

      <AnimationEngine
        animation={animation}
      >

        <Face
          expression={finalExpression}
        />
        <Hair
          style={finalHair}
        />
        <Accessory
          type={finalAccessory}
        />
        <EyeHighlight />

        <Cheek
          type={cheek}
        />

        <EmotionLines
          type={emotionLines}
        />

        <PoseEngine
          pose={pose}
        />

        <EffectEngine
          effect={effect}
        />

      </AnimationEngine>

    </svg>

  );

};