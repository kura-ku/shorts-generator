import React from "react";

type HeadProps = {
  x?: number;
  y?: number;
};

export const Head: React.FC<HeadProps> = ({
  x = 0,
  y = 0,
}) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Head */}
      <circle
        cx="0"
        cy="0"
        r="48"
        fill="white"
        stroke="black"
        strokeWidth="4"
      />

      {/* Left Cheek */}
      <circle
        cx="-22"
        cy="16"
        r="2.5"
        fill="black"
      />

      <circle
        cx="-16"
        cy="18"
        r="2"
        fill="black"
      />

      {/* Right Cheek */}
      <circle
        cx="22"
        cy="16"
        r="2.5"
        fill="black"
      />

      <circle
        cx="16"
        cy="18"
        r="2"
        fill="black"
      />
    </g>
  );
};