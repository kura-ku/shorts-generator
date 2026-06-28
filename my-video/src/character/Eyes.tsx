import React from "react";

export type EyeExpression =
  | "neutral"
  | "happy"
  | "sad"
  | "angry"
  | "surprised"
  | "thinking"
  | "closed";

type Props = {
  expression?: EyeExpression;
};

export const Eyes: React.FC<Props> = ({
  expression = "neutral",
}) => {
  switch (expression) {
    case "happy":
      return (
        <g stroke="black" strokeWidth={4} fill="none">
          <path d="M-30 -8 Q-20 -20 -10 -8" />
          <path d="M10 -8 Q20 -20 30 -8" />
        </g>
      );

    case "sad":
      return (
        <g stroke="black" strokeWidth={4} fill="none">
          <path d="M-30 -12 Q-20 -2 -10 -12" />
          <path d="M10 -12 Q20 -2 30 -12" />
        </g>
      );

    case "angry":
      return (
        <g>
          <line
            x1={-32}
            y1={-18}
            x2={-12}
            y2={-8}
            stroke="black"
            strokeWidth={4}
          />

          <line
            x1={12}
            y1={-8}
            x2={32}
            y2={-18}
            stroke="black"
            strokeWidth={4}
          />

          <circle
            cx={-20}
            cy={-7}
            r={6}
            fill="black"
          />

          <circle
            cx={20}
            cy={-7}
            r={6}
            fill="black"
          />
        </g>
      );

    case "surprised":
      return (
        <g>
          <circle
            cx={-20}
            cy={-8}
            r={9}
            fill="white"
            stroke="black"
            strokeWidth={3}
          />

          <circle
            cx={20}
            cy={-8}
            r={9}
            fill="white"
            stroke="black"
            strokeWidth={3}
          />

          <circle
            cx={-20}
            cy={-8}
            r={5}
            fill="black"
          />

          <circle
            cx={20}
            cy={-8}
            r={5}
            fill="black"
          />

          <circle
            cx={-22}
            cy={-10}
            r={1.5}
            fill="white"
          />

          <circle
            cx={18}
            cy={-10}
            r={1.5}
            fill="white"
          />
        </g>
      );

    case "thinking":
      return (
        <g>
          <circle
            cx={-20}
            cy={-8}
            r={5}
            fill="black"
          />

          <line
            x1={10}
            y1={-8}
            x2={30}
            y2={-8}
            stroke="black"
            strokeWidth={4}
          />
        </g>
      );

    case "closed":
      return (
        <g stroke="black" strokeWidth={4}>
          <line
            x1={-30}
            y1={-8}
            x2={-10}
            y2={-8}
          />

          <line
            x1={10}
            y1={-8}
            x2={30}
            y2={-8}
          />
        </g>
      );

    default:
      return (
        <g>
          <circle
            cx={-20}
            cy={-8}
            r={8}
            fill="white"
            stroke="black"
            strokeWidth={3}
          />

          <circle
            cx={20}
            cy={-8}
            r={8}
            fill="white"
            stroke="black"
            strokeWidth={3}
          />

          <circle
            cx={-20}
            cy={-8}
            r={4.5}
            fill="black"
          />

          <circle
            cx={20}
            cy={-8}
            r={4.5}
            fill="black"
          />

          <circle
            cx={-22}
            cy={-10}
            r={1.5}
            fill="white"
          />

          <circle
            cx={18}
            cy={-10}
            r={1.5}
            fill="white"
          />
        </g>
      );
  }
};