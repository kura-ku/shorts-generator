import React from "react";

export type ClothesType =
  | "none"
  | "hoodie"
  | "tshirt"
  | "shirt"
  | "suit";

type Props = {
  type?: ClothesType;
};

export const Clothes: React.FC<Props> = ({
  type = "hoodie",
}) => {

  switch (type) {

    case "hoodie":

      return (
        <g>

          {/* Hood */}
          <path
            d="
              M-22 56
              Q0 34
              22 56
            "
            fill="#555555"
          />

          {/* Body */}
          <rect
            x={-20}
            y={60}
            width={40}
            height={50}
            rx={14}
            fill="#777777"
          />

          {/* Pocket */}
          <path
            d="
              M-12 92
              Q0 102
              12 92
            "
            fill="none"
            stroke="#666"
            strokeWidth={2}
          />

          {/* Strings */}
          <line
            x1={-5}
            y1={60}
            x2={-5}
            y2={78}
            stroke="white"
            strokeWidth={2}
          />

          <line
            x1={5}
            y1={60}
            x2={5}
            y2={78}
            stroke="white"
            strokeWidth={2}
          />

        </g>
      );

    case "tshirt":

      return (
        <rect
          x={-20}
          y={60}
          width={40}
          height={50}
          rx={12}
          fill="#3B82F6"
        />
      );

    case "shirt":

      return (
        <g>

          <rect
            x={-20}
            y={60}
            width={40}
            height={50}
            rx={12}
            fill="white"
          />

          <line
            x1={0}
            y1={60}
            x2={0}
            y2={110}
            stroke="#BBBBBB"
            strokeWidth={2}
          />

        </g>
      );

    case "suit":

      return (
        <g>

          <rect
            x={-20}
            y={60}
            width={40}
            height={50}
            rx={12}
            fill="#202020"
          />

          <polygon
            points="-8,60 0,76 8,60"
            fill="white"
          />

          <polygon
            points="-2,76 2,76 0,100"
            fill="#C00000"
          />

        </g>
      );

    default:
      return null;

  }

};