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

  const stroke = {
    stroke: "black",
    strokeWidth: 4,
    strokeLinecap: "round" as const,
    fill: "none",
  };

  switch (pose) {

    case "point":

      return (

        <g {...stroke}>

          {/* Left */}

          <line
            x1="-24"
            y1="72"
            x2="-42"
            y2="108"
          />

          <line
            x1="-42"
            y1="108"
            x2="-36"
            y2="148"
          />

          {/* Right */}

          <line
            x1="24"
            y1="72"
            x2="72"
            y2="40"
          />

          <line
            x1="72"
            y1="40"
            x2="104"
            y2="40"
          />

          <Hand
            x={104}
            y={40}
            pose="point"
          />

        </g>

      );

    case "celebrate":

      return (

        <g {...stroke}>

          <line
            x1="-24"
            y1="72"
            x2="-60"
            y2="20"
          />

          <line
            x1="-60"
            y1="20"
            x2="-42"
            y2="-10"
          />

          <line
            x1="24"
            y1="72"
            x2="60"
            y2="20"
          />

          <line
            x1="60"
            y1="20"
            x2="42"
            y2="-10"
          />

          <Hand
            x={-42}
            y={-10}
            pose="fist"
          />

          <Hand
            x={42}
            y={-10}
            pose="fist"
          />

        </g>

      );

    case "thinking":

      return (

        <g {...stroke}>

          <line
            x1="-24"
            y1="72"
            x2="-40"
            y2="112"
          />

          <line
            x1="-40"
            y1="112"
            x2="-36"
            y2="148"
          />

          <line
            x1="24"
            y1="72"
            x2="40"
            y2="52"
          />

          <line
            x1="40"
            y1="52"
            x2="18"
            y2="18"
          />

          <Hand
            x={18}
            y={18}
            pose="thinking"
          />

        </g>

      );

    case "angry":

      return (

        <g {...stroke}>

          <line
            x1="-24"
            y1="72"
            x2="-56"
            y2="90"
          />

          <line
            x1="-56"
            y1="90"
            x2="-76"
            y2="66"
          />

          <line
            x1="24"
            y1="72"
            x2="56"
            y2="90"
          />

          <line
            x1="56"
            y1="90"
            x2="76"
            y2="66"
          />

          <Hand
            x={-76}
            y={66}
            pose="fist"
          />

          <Hand
            x={76}
            y={66}
            pose="fist"
          />

        </g>

      );

    case "sad":

      return (

        <g {...stroke}>

          <line
            x1="-24"
            y1="72"
            x2="-34"
            y2="124"
          />

          <line
            x1="-34"
            y1="124"
            x2="-18"
            y2="164"
          />

          <line
            x1="24"
            y1="72"
            x2="34"
            y2="124"
          />

          <line
            x1="34"
            y1="124"
            x2="18"
            y2="164"
          />

          <Hand
            x={-18}
            y={164}
            pose="open"
          />

          <Hand
            x={18}
            y={164}
            pose="open"
          />

        </g>

      );

    default:

      return (

        <g {...stroke}>

          <line
            x1="-24"
            y1="72"
            x2="-42"
            y2="108"
          />

          <line
            x1="-42"
            y1="108"
            x2="-36"
            y2="148"
          />

          <line
            x1="24"
            y1="72"
            x2="42"
            y2="108"
          />

          <line
            x1="42"
            y1="108"
            x2="36"
            y2="148"
          />

          <Hand
            x={-36}
            y={148}
            pose="open"
          />

          <Hand
            x={36}
            y={148}
            pose="open"
          />

        </g>

      );

  }

};