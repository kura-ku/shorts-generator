import React from "react";

type Props = {
  visible?: boolean;
};

export const EyeHighlight: React.FC<Props> = ({
  visible = true,
}) => {
  if (!visible) {
    return null;
  }

  return (
    <g opacity={0.95}>
      {/* 左目 */}
      <circle
        cx={-21}
        cy={-11}
        r={2.2}
        fill="white"
      />

      <circle
        cx={-18}
        cy={-6}
        r={0.9}
        fill="white"
      />

      {/* 右目 */}
      <circle
        cx={19}
        cy={-11}
        r={2.2}
        fill="white"
      />

      <circle
        cx={22}
        cy={-6}
        r={0.9}
        fill="white"
      />
    </g>
  );
};