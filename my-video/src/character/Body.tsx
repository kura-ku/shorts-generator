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

      {/* 首 */}

      <line
        x1={0}
        y1={44}
        x2={0}
        y2={60}
        stroke="black"
        strokeWidth={4}
        strokeLinecap="round"
      />

      {/* 胴体 */}

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

      {/* 胸ライン */}

      <line
        x1={-12}
        y1={84}
        x2={12}
        y2={84}
        stroke="#D8D8D8"
        strokeWidth={2}
      />

    </g>

  );

};