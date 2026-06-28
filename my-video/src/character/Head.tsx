import React from "react";

type Props = {
  size?: number;
  /** 感情による頭の傾き (deg) */
  tilt?: number;
};

export const Head: React.FC<Props> = ({ size = 48, tilt = 0 }) => {
  return (
    <g transform={`rotate(${tilt})`}>
      {/* 影 — 少し右下にオフセット */}
      <circle
        cx={3}
        cy={4}
        r={size}
        fill="rgba(0,0,0,0.07)"
      />

      {/* 顔本体 — 白塗り・太めのストロークで手描き感 */}
      <circle
        cx={0}
        cy={0}
        r={size}
        fill="#ffffff"
        stroke="#222222"
        strokeWidth={4}
        strokeLinejoin="round"
      />

      {/* ハイライト — 左上の小さな光 */}
      <circle
        cx={-size * 0.35}
        cy={-size * 0.35}
        r={size * 0.1}
        fill="rgba(255,255,255,0.9)"
      />
    </g>
  );
};
