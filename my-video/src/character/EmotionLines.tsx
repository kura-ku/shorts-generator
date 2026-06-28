import React from "react";

export type EmotionLineType =
  | "none"
  | "happy"
  | "angry"
  | "sad"
  | "surprised"
  | "cry";

type Props = {
  type?: EmotionLineType;
};

export const EmotionLines: React.FC<Props> = ({
  type = "none",
}) => {
  const style = {
    stroke: "#222",
    strokeWidth: 3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    fill: "none",
  };

  switch (type) {
    case "happy":
      return (
        <g {...style}>
          <line x1={-48} y1={-30} x2={-58} y2={-46} />
          <line x1={-36} y1={-24} x2={-44} y2={-40} />

          <line x1={48} y1={-30} x2={58} y2={-46} />
          <line x1={36} y1={-24} x2={44} y2={-40} />
        </g>
      );

    case "surprised":
      return (
        <g {...style}>
          <line x1={-24} y1={-66} x2={-24} y2={-46} />
          <line x1={0} y1={-72} x2={0} y2={-48} />
          <line x1={24} y1={-66} x2={24} y2={-46} />
        </g>
      );

    case "angry":
      return (
        <g {...style}>
          <line x1={48} y1={-46} x2={62} y2={-32} />
          <line x1={62} y1={-46} x2={48} y2={-32} />
          <line x1={55} y1={-54} x2={55} y2={-24} />
          <line x1={42} y1={-39} x2={68} y2={-39} />
        </g>
      );

    case "sad":
      return (
        <g {...style} opacity={0.7}>
          <line x1={-10} y1={-64} x2={-10} y2={-46} />
          <line x1={0} y1={-68} x2={0} y2={-44} />
          <line x1={10} y1={-64} x2={10} y2={-46} />
        </g>
      );

    case "cry":
      return (
        <g>
          <path
            d="M-18 2 C-24 18 -18 34 -24 48"
            stroke="#4DA6FF"
            strokeWidth={4}
            fill="none"
            strokeLinecap="round"
          />

          <path
            d="M18 2 C24 18 18 34 24 48"
            stroke="#4DA6FF"
            strokeWidth={4}
            fill="none"
            strokeLinecap="round"
          />
        </g>
      );

    default:
      return null;
  }
};