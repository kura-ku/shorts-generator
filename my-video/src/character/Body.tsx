import React from "react";

type Props = {
  bodyColor?: string;
  lean?: number;
};

export const Body: React.FC<Props> = ({
  bodyColor = "#FFFFFF",
  lean = 0,
}) => {

  return (

    <g
      transform={`rotate(${lean} 0 100)`}
    >

      {/* Neck */}

      <line
        x1={0}
        y1={44}
        x2={0}
        y2={60}
        stroke="black"
        strokeWidth={4}
        strokeLinecap="round"
      />

      {/* Body */}

      <rect
        x={-26}
        y={60}
        width={52}
        height={78}
        rx={22}
        ry={22}
        fill={bodyColor}
        stroke="black"
        strokeWidth={4}
      />

      {/* Chest */}

      <line
        x1={-10}
        y1={86}
        x2={10}
        y2={86}
        stroke="#DADADA"
        strokeWidth={2}
      />

    </g>

  );

};