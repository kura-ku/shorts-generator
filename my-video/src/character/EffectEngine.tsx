import React from "react";

export type EffectType =
  | "none"
  | "sweat"
  | "anger"
  | "heart"
  | "surprised"
  | "question"
  | "sparkle"
  | "tear";

type Props = {
  effect?: EffectType;
};

export const EffectEngine: React.FC<Props> = ({
  effect = "none",
}) => {

  switch (effect) {

    case "sweat":
      return (
        <g>
          <path
            d="M42 -38 C52 -28 52 -14 42 -6 C32 -14 32 -28 42 -38"
            fill="#5DAEFF"
          />
        </g>
      );

    case "anger":
      return (
        <g
          stroke="#FF4A4A"
          strokeWidth={4}
          strokeLinecap="round"
        >
          <line x1="36" y1="-38" x2="48" y2="-26" />
          <line x1="48" y1="-38" x2="36" y2="-26" />
          <line x1="42" y1="-44" x2="42" y2="-20" />
          <line x1="30" y1="-32" x2="54" y2="-32" />
        </g>
      );

    case "heart":
      return (
        <text
          x="42"
          y="-24"
          fontSize={24}
        >
          ❤️
        </text>
      );

    case "surprised":
      return (
        <text
          x="42"
          y="-24"
          fontSize={26}
          fontWeight="bold"
        >
          !
        </text>
      );

    case "question":
      return (
        <text
          x="42"
          y="-24"
          fontSize={26}
          fontWeight="bold"
        >
          ?
        </text>
      );

    case "sparkle":
      return (
        <g
          stroke="#FFD700"
          strokeWidth={3}
          strokeLinecap="round"
        >
          <line x1="42" y1="-40" x2="42" y2="-22" />
          <line x1="34" y1="-31" x2="50" y2="-31" />
          <line x1="36" y1="-37" x2="48" y2="-25" />
          <line x1="48" y1="-37" x2="36" y2="-25" />
        </g>
      );

    case "tear":
      return (
        <g>
          <path
            d="M-18 6 C-14 16 -14 24 -18 30"
            stroke="#5DAEFF"
            strokeWidth={3}
            fill="none"
          />
          <path
            d="M18 6 C22 16 22 24 18 30"
            stroke="#5DAEFF"
            strokeWidth={3}
            fill="none"
          />
        </g>
      );

    default:
      return null;

  }

};