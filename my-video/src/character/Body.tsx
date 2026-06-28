import React from "react";
import { Clothes, ClothesType } from "./Clothes";

type Props = {
  bodyColor?: string;
  lean?: number;
  clothes?: ClothesType;
};

export const Body: React.FC<Props> = ({
  bodyColor = "#ffffff",
  lean = 0,
  clothes = "hoodie",
}) => {
  return (
    <g transform={`rotate(${lean} 0 100)`}>

      {/* Neck */}
      <line
        x1={0}
        y1={42}
        x2={0}
        y2={58}
        stroke="black"
        strokeWidth={5}
        strokeLinecap="round"
      />

      {/* Shoulder */}
      <line
        x1={-22}
        y1={62}
        x2={22}
        y2={62}
        stroke="black"
        strokeWidth={5}
        strokeLinecap="round"
      />

      {/* Body */}
      <line
        x1={0}
        y1={62}
        x2={0}
        y2={145}
        stroke="black"
        strokeWidth={5}
        strokeLinecap="round"
      />

      {/* Clothes */}
      <Clothes type={clothes} />

      {/* Tie */}
      <path
        d="
          M0 66
          L8 82
          L0 118
          L-8 82
          Z
        "
        fill="#2563EB"
      />

    </g>
  );
};