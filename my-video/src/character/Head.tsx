import React from "react";

type Props = {
  size?: number;
};

export const Head: React.FC<Props> = ({
  size = 48,
}) => {
  return (
    <>
      {/* 影 */}
      <circle
        cx={2}
        cy={3}
        r={size}
        fill="rgba(0,0,0,0.08)"
      />

      {/* 顔 */}
      <circle
        cx={0}
        cy={0}
        r={size}
        fill="#ffffff"
        stroke="#222"
        strokeWidth={4}
      />
    </>
  );
};