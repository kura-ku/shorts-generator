import React from "react";
import { Foot } from "./Foot";

export type LegPose =
  | "idle"
  | "walk"
  | "run"
  | "jump"
  | "sit";

type Props = {
  pose?: LegPose;
};

export const Leg: React.FC<Props> = ({
  pose = "idle",
}) => {

  const style = {
    stroke: "black",
    strokeWidth: 5,
    strokeLinecap: "round" as const,
    fill: "none",
  };

  switch (pose) {

    case "walk":

      return (
        <g {...style}>

          <line
            x1={-8}
            y1={145}
            x2={-28}
            y2={190}
          />

          <line
            x1={8}
            y1={145}
            x2={24}
            y2={190}
          />

          <Foot
            x={-28}
            y={190}
            rotation={-10}
          />

          <Foot
            x={24}
            y={190}
            rotation={8}
          />

        </g>
      );

    case "run":

      return (
        <g {...style}>

          <line
            x1={-8}
            y1={145}
            x2={-44}
            y2={180}
          />

          <line
            x1={8}
            y1={145}
            x2={42}
            y2={200}
          />

          <Foot
            x={-44}
            y={180}
            rotation={-20}
          />

          <Foot
            x={42}
            y={200}
            rotation={18}
          />

        </g>
      );

    case "jump":

      return (
        <g {...style}>

          <line
            x1={-8}
            y1={145}
            x2={-24}
            y2={182}
          />

          <line
            x1={8}
            y1={145}
            x2={24}
            y2={182}
          />

          <Foot
            x={-24}
            y={182}
            rotation={-15}
          />

          <Foot
            x={24}
            y={182}
            rotation={15}
          />

        </g>
      );

    case "sit":

      return (
        <g {...style}>

          <line
            x1={-8}
            y1={145}
            x2={-26}
            y2={168}
          />

          <line
            x1={8}
            y1={145}
            x2={26}
            y2={168}
          />

          <Foot
            x={-26}
            y={168}
          />

          <Foot
            x={26}
            y={168}
          />

        </g>
      );

    default:

      return (
        <g {...style}>

          <line
            x1={-8}
            y1={145}
            x2={-18}
            y2={200}
          />

          <line
            x1={8}
            y1={145}
            x2={18}
            y2={200}
          />

          <Foot
            x={-18}
            y={200}
          />

          <Foot
            x={18}
            y={200}
          />

        </g>
      );

  }

};