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

          {/* フード */}

          <path
            d="
              M-30 56
              Q0 36
              30 56
            "
            fill="#666666"
          />

          {/* パーカー */}

          <rect
            x={-24}
            y={64}
            width={48}
            height={70}
            rx={18}
            fill="#777777"
          />

          {/* 紐 */}

          <line
            x1={-6}
            y1={68}
            x2={-6}
            y2={92}
            stroke="white"
            strokeWidth={2}
          />

          <line
            x1={6}
            y1={68}
            x2={6}
            y2={92}
            stroke="white"
            strokeWidth={2}
          />

        </g>

      );

    case "tshirt":

      return (

        <rect
          x={-24}
          y={64}
          width={48}
          height={70}
          rx={16}
          fill="#4A90E2"
        />

      );

    case "shirt":

      return (

        <g>

          <rect
            x={-24}
            y={64}
            width={48}
            height={70}
            rx={16}
            fill="white"
          />

          <line
            x1={0}
            y1={64}
            x2={0}
            y2={134}
            stroke="#CCCCCC"
            strokeWidth={2}
          />

        </g>

      );

    case "suit":

      return (

        <g>

          <rect
            x={-24}
            y={64}
            width={48}
            height={70}
            rx={16}
            fill="#202020"
          />

          <polygon
            points="-8,64 0,86 8,64"
            fill="white"
          />

          <polygon
            points="-2,86 2,86 0,110"
            fill="#C00000"
          />

        </g>

      );

    default:

      return null;

  }

};