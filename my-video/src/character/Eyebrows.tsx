import React from "react";
import { EyeExpression } from "./Eyes";

type Props = {
  expression?: EyeExpression;
};

export const Eyebrows: React.FC<Props> = ({
  expression = "neutral",
}) => {
  const style = {
    stroke: "black",
    strokeWidth: 4,
    strokeLinecap: "round" as const,
  };

  switch (expression) {
    case "happy":
      return (
        <g {...style}>
          <line
            x1={-32}
            y1={-30}
            x2={-12}
            y2={-34}
          />

          <line
            x1={12}
            y1={-34}
            x2={32}
            y2={-30}
          />
        </g>
      );

    case "sad":
      return (
        <g {...style}>
          <line
            x1={-32}
            y1={-28}
            x2={-12}
            y2={-38}
          />

          <line
            x1={12}
            y1={-38}
            x2={32}
            y2={-28}
          />
        </g>
      );

    case "angry":
      return (
        <g {...style}>
          <line
            x1={-32}
            y1={-22}
            x2={-12}
            y2={-34}
          />

          <line
            x1={12}
            y1={-34}
            x2={32}
            y2={-22}
          />
        </g>
      );

    case "surprised":
      return (
        <g {...style}>
          <line
            x1={-32}
            y1={-42}
            x2={-12}
            y2={-42}
          />

          <line
            x1={12}
            y1={-42}
            x2={32}
            y2={-42}
          />
        </g>
      );

    case "thinking":
      return (
        <g {...style}>
          <line
            x1={-32}
            y1={-30}
            x2={-12}
            y2={-30}
          />

          <line
            x1={12}
            y1={-36}
            x2={32}
            y2={-28}
          />
        </g>
      );

    case "closed":
      return null;

    default:
      return (
        <g {...style}>
          <line
            x1={-32}
            y1={-30}
            x2={-12}
            y2={-30}
          />

          <line
            x1={12}
            y1={-30}
            x2={32}
            y2={-30}
          />
        </g>
      );
  }
};