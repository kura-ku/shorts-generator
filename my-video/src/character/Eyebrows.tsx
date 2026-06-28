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
            x1={-30}
            y1={-30}
            x2={-12}
            y2={-26}
          />

          <line
            x1={12}
            y1={-26}
            x2={30}
            y2={-30}
          />

        </g>
      );

    case "sad":

      return (
        <g {...style}>

          <line
            x1={-30}
            y1={-24}
            x2={-12}
            y2={-34}
          />

          <line
            x1={12}
            y1={-34}
            x2={30}
            y2={-24}
          />

        </g>
      );

    case "angry":

      return (
        <g {...style}>

          <line
            x1={-30}
            y1={-22}
            x2={-12}
            y2={-32}
          />

          <line
            x1={12}
            y1={-32}
            x2={30}
            y2={-22}
          />

        </g>
      );

    case "surprised":

      return (
        <g {...style}>

          <line
            x1={-30}
            y1={-40}
            x2={-10}
            y2={-40}
          />

          <line
            x1={10}
            y1={-40}
            x2={30}
            y2={-40}
          />

        </g>
      );

    case "thinking":

      return (
        <g {...style}>

          <line
            x1={-30}
            y1={-30}
            x2={-10}
            y2={-30}
          />

          <line
            x1={12}
            y1={-36}
            x2={30}
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
            x1={-30}
            y1={-28}
            x2={-10}
            y2={-28}
          />

          <line
            x1={10}
            y1={-28}
            x2={30}
            y2={-28}
          />

        </g>
      );

  }

};