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
    strokeLinejoin: "round" as const,
    fill: "none",
  };

  switch (expression) {
    case "happy":
      return (
        <path
          d="M-18 18 Q0 40 18 18"
          {...style}
        />
      );

    case "sad":
      return (
        <path
          d="M-18 34 Q0 14 18 34"
          {...style}
        />
      );

    case "angry":
      return (
        <g>
          <path
            d="M-14 24 L14 24"
            {...style}
          />
        </g>
      );

    case "surprised":
      return (
        <ellipse
          cx={0}
          cy={24}
          rx={9}
          ry={12}
          fill="white"
          stroke="black"
          strokeWidth={4}
        />
      );

    case "thinking":
      return (
        <path
          d="M-12 24 Q0 30 12 24"
          {...style}
        />
      );

    case "closed":
      return (
        <path
          d="M-12 24 L12 24"
          {...style}
        />
      );

    default:
      return (
        <path
          d="M-12 22 Q0 30 12 22"
          {...style}
        />
      );
  }
};