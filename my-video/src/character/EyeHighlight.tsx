import React from "react";

type Props = {
  visible?: boolean;
};

export const EyeHighlight: React.FC<Props> = ({
  visible = true,
}) => {

  if (!visible) return null;

  return (

    <g>

      {/* 左目 */}

      <circle
        cx={-18}
        cy={-8}
        r={2}
        fill="white"
      />

      {/* 右目 */}

      <circle
        cx={18}
        cy={-8}
        r={2}
        fill="white"
      />

    </g>

  );

};