import React from "react";

export type HandPose =
  | "open"
  | "fist"
  | "point"
  | "thinking";

type Props = {
  x: number;
  y: number;
  rotation?: number;
  pose?: HandPose;
};

export const Hand: React.FC<Props> = ({
  x,
  y,
  rotation = 0,
  pose = "open",
}) => {

  switch (pose) {

    // 指差し
    case "point":
      return (
        <g
          transform={`translate(${x} ${y}) rotate(${rotation})`}
          stroke="black"
          strokeWidth={3}
          strokeLinecap="round"
        >

          <line x1="0" y1="0" x2="18" y2="0"/>

          <line x1="0" y1="0" x2="-6" y2="-4"/>

          <line x1="0" y1="0" x2="-6" y2="4"/>

        </g>
      );

    // グー
    case "fist":

      return (

        <circle

          cx={x}
          cy={y}
          r="7"

          fill="white"

          stroke="black"

          strokeWidth="3"

        />

      );

    // あごに手
    case "thinking":

      return (

        <g
          transform={`translate(${x} ${y}) rotate(${rotation})`}
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
        >

          <line x1="0" y1="0" x2="8" y2="-8"/>

          <line x1="0" y1="0" x2="10" y2="2"/>

        </g>

      );

    // パー
    default:

      return (

        <g
          transform={`translate(${x} ${y}) rotate(${rotation})`}
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
        >

          <line x1="0" y1="0" x2="0" y2="-10"/>

          <line x1="0" y1="0" x2="6" y2="-8"/>

          <line x1="0" y1="0" x2="-6" y2="-8"/>

          <line x1="0" y1="0" x2="8" y2="0"/>

          <line x1="0" y1="0" x2="-8" y2="0"/>

        </g>

      );

  }

};