import React from "react";
import { Clothes, ClothesType } from "./Clothes";

type Props = {
  bodyColor?: string;
  lean?: number;
  clothes?: ClothesType;
};

export const Body: React.FC<Props> = ({
  bodyColor = "#FFFFFF",
  lean = 0,
  clothes = "hoodie",
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

      {/* Base Body */}

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

      {/* Clothes */}

      <Clothes
        type={clothes}
      />

    </g>

  );

};