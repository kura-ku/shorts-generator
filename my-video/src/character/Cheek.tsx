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

  return (

    <g>

      <ellipse
        cx={-28}
        cy={8}
        rx={7}
        ry={4}
        fill="#FFB6C1"
        opacity={0.8}
      />

      <ellipse
        cx={28}
        cy={8}
        rx={7}
        ry={4}
        fill="#FFB6C1"
        opacity={0.8}
      />

    </g>

  );

};