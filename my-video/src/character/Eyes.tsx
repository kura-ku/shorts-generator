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

  const eyeStyle = {
    fill: "black",
  };

  switch (expression) {

    case "happy":

      return (
        <g stroke="black" strokeWidth={4} fill="none">

          <path
            d="M-28 -8 Q-18 -18 -8 -8"
          />

          <path
            d="M8 -8 Q18 -18 28 -8"
          />

        </g>
      );

    case "sad":

      return (
        <g stroke="black" strokeWidth={4} fill="none">

          <path
            d="M-28 -12 Q-18 -4 -8 -12"
          />

          <path
            d="M8 -12 Q18 -4 28 -12"
          />

        </g>
      );

    case "angry":

      return (
        <g>

          <line
            x1={-30}
            y1={-18}
            x2={-12}
            y2={-8}
            stroke="black"
            strokeWidth={4}
          />

          <line
            x1={12}
            y1={-8}
            x2={30}
            y2={-18}
            stroke="black"
            strokeWidth={4}
          />

          <circle
            cx={-20}
            cy={-6}
            r={4}
            {...eyeStyle}
          />

          <circle
            cx={20}
            cy={-6}
            r={4}
            {...eyeStyle}
          />

        </g>
      );

    case "surprised":

      return (
        <g>

          <circle
            cx={-20}
            cy={-8}
            r={7}
            fill="white"
            stroke="black"
            strokeWidth={3}
          />

          <circle
            cx={20}
            cy={-8}
            r={7}
            fill="white"
            stroke="black"
            strokeWidth={3}
          />

          <circle
            cx={-20}
            cy={-8}
            r={3}
            fill="black"
          />

          <circle
            cx={20}
            cy={-8}
            r={3}
            fill="black"
          />

        </g>
      );

    case "thinking":

      return (
        <g>

          <circle
            cx={-20}
            cy={-8}
            r={4}
            {...eyeStyle}
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
        <g
          stroke="black"
          strokeWidth={4}
        >

          <line
            x1={-28}
            y1={-8}
            x2={-12}
            y2={-8}
          />

          <line
            x1={12}
            y1={-8}
            x2={28}
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
            r={5}
            {...eyeStyle}
          />

          <circle
            cx={20}
            cy={-8}
            r={5}
            {...eyeStyle}
          />

        </g>
      );

  }

};