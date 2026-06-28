import React from "react";
import { EyeExpression } from "./Eyes";

type Props = {
  expression: EyeExpression;
};

export const Mouth: React.FC<Props> = ({
  expression,
}) => {

  const stroke = {
    stroke: "black",
    strokeWidth: 4,
    strokeLinecap: "round" as const,
    fill: "none",
  };

  switch (expression) {

    // 😊
    case "happy":
      return (
        <path
          d="M -14 20 Q 0 34 14 20"
          {...stroke}
        />
      );

    // 😲
    case "surprised":
      return (
        <ellipse
          cx="0"
          cy="22"
          rx="7"
          ry="10"
          fill="white"
          stroke="black"
          strokeWidth="4"
        />
      );

    // 😡
    case "angry":
      return (
        <path
          d="M -14 28 Q 0 18 14 28"
          {...stroke}
        />
      );

    // 🤔
    case "thinking":
      return (
        <>
          <line
            x1="-8"
            y1="24"
            x2="10"
            y2="24"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <circle
            cx="18"
            cy="24"
            r="2"
            fill="black"
          />
        </>
      );

    // 😭
    case "crying":
      return (
        <path
          d="M -12 30 Q 0 16 12 30"
          {...stroke}
        />
      );

    // 😢
    case "sad":
      return (
        <path
          d="M -12 28 Q 0 18 12 28"
          {...stroke}
        />
      );

    // 😎
    case "confident":
      return (
        <path
          d="M -12 22 Q 0 26 12 22"
          {...stroke}
        />
      );

    default:
      return (
        <line
          x1="-8"
          y1="24"
          x2="8"
          y2="24"
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
        />
      );

  }

};