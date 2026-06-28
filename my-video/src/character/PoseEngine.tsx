import React from "react";

import { Body } from "./Body";
import { Arm, ArmPose } from "./Arm";
import { Leg, LegPose } from "./Leg";

export type PoseType =
  | "idle"
  | "point"
  | "celebrate"
  | "thinking"
  | "angry"
  | "sad";

type Props = {
  pose?: PoseType;
};

export const PoseEngine: React.FC<Props> = ({
  pose = "idle",
}) => {

  let armPose: ArmPose = "idle";
  let legPose: LegPose = "idle";

  let bodyLean = 0;

  switch (pose) {

    case "point":

      armPose = "point";
      legPose = "walk";
      bodyLean = 8;

      break;

    case "celebrate":

      armPose = "celebrate";
      legPose = "jump";
      bodyLean = 0;

      break;

    case "thinking":

      armPose = "thinking";
      legPose = "idle";
      bodyLean = -6;

      break;

    case "angry":

      armPose = "angry";
      legPose = "walk";
      bodyLean = 10;

      break;

    case "sad":

      armPose = "sad";
      legPose = "idle";
      bodyLean = -12;

      break;

    default:

      armPose = "idle";
      legPose = "idle";
      bodyLean = 0;

  }

  return (

    <g>

      <Body
        lean={bodyLean}
      />

      <Arm
        pose={armPose}
      />

      <Leg
        pose={legPose}
      />

    </g>

  );

};