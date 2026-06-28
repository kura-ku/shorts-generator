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
    strokeWidth: 4,
    strokeLinecap: "round" as const,
    fill: "none",
  };

  switch (pose) {

    case "point":

      return (

        <g {...style}>

          <line
            x1={-24}
            y1={72}
            x2={-42}
            y2={108}
          />

          <line
            x1={-42}
            y1={108}
            x2={-36}
            y2={148}
          />

          <line
            x1={24}
            y1={72}
            x2={74}
            y2={42}
          />

          <line
            x1={74}
            y1={42}
            x2={108}
            y2={42}
          />

          <Hand
            x={108}
            y={42}
            rotation={0}
            pose="point"
          />

          <Hand
            x={-36}
            y={148}
            pose="open"
          />

        </g>

      );

    case "celebrate":

      return (

        <g {...style}>

          <line
            x1={-24}
            y1={72}
            x2={-64}
            y2={12}
          />

          <line
            x1={24}
            y1={72}
            x2={64}
            y2={12}
          />

          <Hand
            x={-64}
            y={12}
            pose="fist"
          />

          <Hand
            x={64}
            y={12}
            pose="fist"
          />

        </g>

      );

    case "thinking":

      return (

        <g {...style}>

          <line
            x1={-24}
            y1={72}
            x2={-40}
            y2={118}
          />

          <line
            x1={24}
            y1={72}
            x2={18}
            y2={20}
          />

          <Hand
            x={18}
            y={20}
            pose="thinking"
          />

          <Hand
            x={-40}
            y={118}
            pose="open"
          />

        </g>

      );

    case "angry":

      return (

        <g {...style}>

          <line
            x1={-24}
            y1={72}
            x2={-62}
            y2={92}
          />

          <line
            x1={24}
            y1={72}
            x2={62}
            y2={92}
          />

          <Hand
            x={-62}
            y={92}
            pose="fist"
          />

          <Hand
            x={62}
            y={92}
            pose="fist"
          />

        </g>

      );

    case "sad":

      return (

        <g {...style}>

          <line
            x1={-24}
            y1={72}
            x2={-26}
            y2={158}
          />

          <line
            x1={24}
            y1={72}
            x2={26}
            y2={158}
          />

          <Hand
            x={-26}
            y={158}
            pose="open"
          />

          <Hand
            x={26}
            y={158}
            pose="open"
          />

        </g>

      );

    default:

      return (

        <g {...style}>

          <line
            x1={-24}
            y1={72}
            x2={-42}
            y2={112}
          />

          <line
            x1={24}
            y1={72}
            x2={42}
            y2={112}
          />

          <Hand
            x={-42}
            y={112}
            pose="open"
          />

          <Hand
            x={42}
            y={112}
            pose="open"
          />

        </g>

      );

  }

};