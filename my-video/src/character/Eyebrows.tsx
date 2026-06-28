import React from "react";
import { EyeExpression } from "./Eyes";

type Props = {
  expression: EyeExpression;
};

export const Eyebrows: React.FC<Props> = ({
  expression,
}) => {
  const stroke = {
    stroke: "black",
    strokeWidth: 4,
    strokeLinecap: "round" as const,
  };

  switch (expression) {
    case "happy":
      return (
        <g {...stroke}>
          <line
            x1="-24"
            y1="-18"
            x2="-10"
            y2="-16"
          />

          <line
            x1="10"
            y1="-16"
            x2="24"
            y2="-18"
          />
        </g>
      );

    case "surprised":
      return (
        <g {...stroke}>
          <line
            x1="-24"
            y1="-24"
            x2="-10"
            y2="-24"
          />

          <line
            x1="10"
            y1="-24"
            x2="24"
            y2="-24"
          />
        </g>
      );

    case "angry":
      return (
        <g {...stroke}>
          <line
            x1="-26"
            y1="-18"
            x2="-10"
            y2="-10"
          />

          <line
            x1="10"
            y1="-10"
            x2="26"
            y2="-18"
          />
        </g>
      );

    case "thinking":
      return (
        <g {...stroke}>
          <line
            x1="-24"
            y1="-18"
            x2="-10"
            y2="-18"
          />

          <line
            x1="10"
            y1="-14"
            x2="26"
            y2="-20"
          />
        </g>
      );

    case "sad":
      return (
        <g {...stroke}>
          <line
            x1="-24"
            y1="-14"
            x2="-10"
            y2="-18"
          />

          <line
            x1="10"
            y1="-18"
            x2="24"
            y2="-14"
          />
        </g>
      );

    case "crying":
      return (
        <g {...stroke}>
          <line
            x1="-24"
            y1="-14"
            x2="-10"
            y2="-20"
          />

          <line
            x1="10"
            y1="-20"
            x2="24"
            y2="-14"
          />
        </g>
      );

    case "confident":
      return (
        <g {...stroke}>
          <line
            x1="-24"
            y1="-18"
            x2="-10"
            y2="-16"
          />

          <line
            x1="10"
            y1="-16"
            x2="24"
            y2="-18"
          />
        </g>
      );

    default:
      return (
        <g {...stroke}>
          <line
            x1="-24"
            y1="-18"
            x2="-10"
            y2="-18"
          />

          <line
            x1="10"
            y1="-18"
            x2="24"
            y2="-18"
          />
        </g>
      );
  }
};