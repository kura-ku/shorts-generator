import React from "react";

export type AccessoryType =
  | "none"
  | "glasses"
  | "crown"
  | "sweat"
  | "idea"
  | "anger"
  | "surprised";

type Props = {
  type?: AccessoryType;
};

export const Accessory: React.FC<Props> = ({
  type = "none",
}) => {

  switch (type) {

    case "glasses":

      return (

        <g
          stroke="black"
          strokeWidth={3}
          fill="none"
        >

          <circle
            cx={-20}
            cy={-8}
            r={11}
          />

          <circle
            cx={20}
            cy={-8}
            r={11}
          />

          <line
            x1={-9}
            y1={-8}
            x2={9}
            y2={-8}
          />

        </g>

      );

    case "crown":

      return (

        <g>

          <polygon
            points="-28,-52 -18,-72 0,-54 18,-72 28,-52"
            fill="#FFD700"
            stroke="black"
            strokeWidth={2}
          />

        </g>

      );

    case "sweat":

      return (

        <path
          d="M34 -24 Q44 -40 38 -8"
          fill="#55C8FF"
          stroke="#2A9FFF"
          strokeWidth={2}
        />

      );

    case "idea":

      return (

        <g>

          <circle
            cx={0}
            cy={-72}
            r={12}
            fill="#FFE600"
            stroke="black"
            strokeWidth={2}
          />

          <line
            x1={0}
            y1={-60}
            x2={0}
            y2={-48}
            stroke="black"
            strokeWidth={2}
          />

        </g>

      );

    case "anger":

      return (

        <path
          d="
            M32 -28
            L42 -36
            L38 -22
            L50 -18
            L36 -14
            Z
          "
          fill="#FF3030"
        />

      );

    case "surprised":

      return (

        <text
          x={0}
          y={-72}
          textAnchor="middle"
          fontSize={26}
          fontWeight="bold"
        >

          !

        </text>

      );

    default:

      return null;

  }

};