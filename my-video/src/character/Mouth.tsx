import React from "react";
import { EyeExpression } from "./Eyes";

type Props = {
  expression?: EyeExpression;
};

export const Mouth: React.FC<Props> = ({
  expression = "neutral",
}) => {

  const style = {
    stroke: "black",
    strokeWidth: 4,
    strokeLinecap: "round" as const,
    fill: "none",
  };

  switch (expression) {

    case "happy":

      return (
        <path
          d="M-16 20 Q0 36 16 20"
          {...style}
        />
      );

    case "sad":

      return (
        <path
          d="M-16 30 Q0 16 16 30"
          {...style}
        />
      );

    case "angry":

      return (
        <path
          d="M-12 24 L12 24"
          {...style}
        />
      );

    case "surprised":

      return (
        <ellipse
          cx={0}
          cy={24}
          rx={8}
          ry={10}
          fill="white"
          stroke="black"
          strokeWidth={4}
        />
      );

    case "thinking":

      return (
        <path
          d="M-10 24 Q0 28 10 24"
          {...style}
        />
      );

    case "closed":

      return (
        <path
          d="M-10 24 L10 24"
          {...style}
        />
      );

    default:

      return (
        <path
          d="M-8 24 Q0 28 8 24"
          {...style}
        />
      );

  }

};