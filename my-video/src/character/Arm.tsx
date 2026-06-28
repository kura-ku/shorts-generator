import React from "react";
import { Hand } from "./Hand";

export type ArmPose =
  | "idle"
  | "point"
  | "celebrate"
  | "thinking"
  | "angry"
  | "sad";

type Props = {
  pose?: ArmPose;
};

export const Arm: React.FC<Props> = ({
  pose = "idle",
}) => {

  const style = {
    stroke: "black",
    strokeWidth: 5,
    strokeLinecap: "round" as const,
    fill: "none",
  };

  switch (pose) {

    case "point":

      return (
        <g {...style}>

          {/* Left */}
          <line
            x1={-20}
            y1={66}
            x2={-42}
            y2={108}
          />

          <Hand
            x={-42}
            y={108}
            pose="open"
          />

          {/* Right */}
          <line
            x1={20}
            y1={66}
            x2={78}
            y2={52}
          />

          <Hand
            x={78}
            y={52}
            pose="point"
            rotation={-10}
          />

        </g>
      );

    case "celebrate":

      return (
        <g {...style}>

          <line
            x1={-20}
            y1={66}
            x2={-60}
            y2={18}
          />

          <line
            x1={20}
            y1={66}
            x2={60}
            y2={18}
          />

          <Hand
            x={-60}
            y={18}
            pose="fist"
          />

          <Hand
            x={60}
            y={18}
            pose="fist"
          />

        </g>
      );

    case "thinking":

      return (
        <g {...style}>

          <line
            x1={-20}
            y1={66}
            x2={-38}
            y2={110}
          />

          <line
            x1={20}
            y1={66}
            x2={18}
            y2={12}
          />

          <Hand
            x={18}
            y={12}
            pose="thinking"
          />

          <Hand
            x={-38}
            y={110}
            pose="open"
          />

        </g>
      );

    case "angry":

      return (
        <g {...style}>

          <line
            x1={-20}
            y1={66}
            x2={-48}
            y2={86}
          />

          <line
            x1={20}
            y1={66}
            x2={48}
            y2={86}
          />

          <Hand
            x={-48}
            y={86}
            pose="fist"
          />

          <Hand
            x={48}
            y={86}
            pose="fist"
          />

        </g>
      );

    case "sad":

      return (
        <g {...style}>

          <line
            x1={-20}
            y1={66}
            x2={-22}
            y2={146}
          />

          <line
            x1={20}
            y1={66}
            x2={22}
            y2={146}
          />

          <Hand
            x={-22}
            y={146}
            pose="open"
          />

          <Hand
            x={22}
            y={146}
            pose="open"
          />

        </g>
      );

    default:

      return (
        <g {...style}>

          <line
            x1={-20}
            y1={66}
            x2={-42}
            y2={106}
          />

          <line
            x1={20}
            y1={66}
            x2={42}
            y2={106}
          />

          <Hand
            x={-42}
            y={106}
            pose="open"
          />

          <Hand
            x={42}
            y={106}
            pose="open"
          />

        </g>
      );

  }

};