import React from "react";

export type EyeExpression =
  | "neutral"
  | "happy"
  | "surprised"
  | "angry"
  | "thinking"
  | "sad"
  | "crying"
  | "confident";

type Props = {
  expression: EyeExpression;
};

export const Eyes: React.FC<Props> = ({
  expression,
}) => {
  switch (expression) {
    case "happy":
      return (
        <g stroke="black" strokeWidth={4} fill="none">
          <path d="M -22 -8 Q -16 -2 -10 -8" />
          <path d="M 10 -8 Q 16 -2 22 -8" />
        </g>
      );

    case "surprised":
      return (
        <>
          <circle
            cx="-16"
            cy="-6"
            r="5"
            fill="black"
          />
          <circle
            cx="16"
            cy="-6"
            r="5"
            fill="black"
          />
        </>
      );

    case "angry":
      return (
        <g stroke="black" strokeWidth={4}>
          <line
            x1="-24"
            y1="-12"
            x2="-10"
            y2="-4"
          />

          <line
            x1="24"
            y1="-12"
            x2="10"
            y2="-4"
          />

          <circle
            cx="-16"
            cy="-2"
            r="3"
            fill="black"
          />

          <circle
            cx="16"
            cy="-2"
            r="3"
            fill="black"
          />
        </g>
      );

    case "thinking":
      return (
        <>
          <circle
            cx="-16"
            cy="-4"
            r="3"
            fill="black"
          />

          <line
            x1="12"
            y1="-4"
            x2="22"
            y2="-4"
            stroke="black"
            strokeWidth={4}
          />
        </>
      );

    case "sad":
      return (
        <>
          <circle
            cx="-16"
            cy="-4"
            r="3"
            fill="black"
          />

          <circle
            cx="16"
            cy="-4"
            r="3"
            fill="black"
          />
        </>
      );

    case "crying":
      return (
        <>
          <circle
            cx="-16"
            cy="-4"
            r="3"
            fill="black"
          />

          <circle
            cx="16"
            cy="-4"
            r="3"
            fill="black"
          />

          <path
            d="M -16 2 Q -18 10 -14 16"
            stroke="#4da6ff"
            strokeWidth={3}
            fill="none"
          />

          <path
            d="M 16 2 Q 18 10 14 16"
            stroke="#4da6ff"
            strokeWidth={3}
            fill="none"
          />
        </>
      );

    case "confident":
      return (
        <>
          <circle
            cx="-16"
            cy="-4"
            r="3"
            fill="black"
          />

          <circle
            cx="16"
            cy="-4"
            r="3"
            fill="black"
          />
        </>
      );

    default:
      return (
        <>
          <circle
            cx="-16"
            cy="-4"
            r="3"
            fill="black"
          />

          <circle
            cx="16"
            cy="-4"
            r="3"
            fill="black"
          />
        </>
      );
  }
};