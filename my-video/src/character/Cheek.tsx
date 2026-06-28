import React from "react";

export type CheekType =
  | "none"
  | "happy"
  | "cute"
  | "embarrassed";

type Props = {
  type?: CheekType;
};

export const Cheek: React.FC<Props> = ({
  type = "none",
}) => {
  if (type === "none") {
    return null;
  }

  const opacity =
    type === "embarrassed"
      ? 0.9
      : 0.65;

  const rx =
    type === "cute"
      ? 10
      : 8;

  const ry =
    type === "cute"
      ? 6
      : 5;

  return (
    <g>
      <ellipse
        cx={-28}
        cy={10}
        rx={rx}
        ry={ry}
        fill="#FFB6C1"
        opacity={opacity}
      />

      <ellipse
        cx={28}
        cy={10}
        rx={rx}
        ry={ry}
        fill="#FFB6C1"
        opacity={opacity}
      />
    </g>
  );
};