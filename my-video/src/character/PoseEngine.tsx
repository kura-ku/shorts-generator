import React from "react";

import { Body } from "./Body";
import { Arm, ArmPose } from "./Arm";
import { Leg, LegPose } from "./Leg";

export type PoseType =
  | "idle"
  | "point"
  | "thinking"
  | "celebrate"
  | "angry"
  | "sad"
  | "walk"
  | "run"
  | "jump";

type Props = {
  pose?: PoseType;
};

export const PoseEngine: React.FC<Props> = ({
  pose = "idle",
}) => {

  let bodyLean = 0;
  let armPose: ArmPose = "idle";
  let legPose: LegPose = "idle";

  switch (pose) {

    case "point":
      bodyLean = -6;
      armPose = "point";
      legPose = "idle";
      break;

    case "thinking":
      bodyLean = -8;
      armPose = "thinking";
      legPose = "idle";
      break;

    case "celebrate":
      bodyLean = 0;
      armPose = "celebrate";
      legPose = "jump";
      break;

    case "angry":
      bodyLean = 4;
      armPose = "angry";
      legPose = "idle";
      break;

    case "sad":
      bodyLean = 10;
      armPose = "sad";
      legPose = "idle";
      break;

    case "walk":
      bodyLean = -4;
      armPose = "idle";
      legPose = "walk";
      break;

    case "run":
      bodyLean = -12;
      armPose = "point";
      legPose = "run";
      break;

    case "jump":
      bodyLean = 0;
      armPose = "celebrate";
      legPose = "jump";
      break;

    default:
      bodyLean = 0;
      armPose = "idle";
      legPose = "idle";

  }

  return (
    <>
      <Body lean={bodyLean} />

      <Arm pose={armPose} />

      <Leg pose={legPose} />
    </>
  );

};