import React from "react";

export type EmotionType =
  | "sad"
  | "talking"
  | "excited"
  | "angry"
  | "smirk"
  | "happy"
  | "love"
  | "stress"
  | "neutral";

type Props = {
  emotion: EmotionType;
  /** Head の size と同じ値を渡す (default 48) */
  size?: number;
};

const SW = 4; // stroke-width の基準値

export const Face: React.FC<Props> = ({ emotion, size = 48 }) => {
  const s = size / 48; // スケール係数

  // ── 眉 ──────────────────────────────────────────────
  const Brows: Record<EmotionType, React.FC> = {
    sad: () => (
      <>
        <path d={`M${-22*s},${-16*s} Q${-12*s},${-22*s} ${-4*s},${-18*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
        <path d={`M${4*s},${-18*s} Q${12*s},${-22*s} ${22*s},${-16*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
      </>
    ),
    talking: () => (
      <>
        <line x1={-22*s} y1={-18*s} x2={-4*s} y2={-18*s}
          stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
        <line x1={4*s} y1={-18*s} x2={22*s} y2={-18*s}
          stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
      </>
    ),
    excited: () => (
      <>
        <path d={`M${-22*s},${-20*s} Q${-12*s},${-28*s} ${-4*s},${-22*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
        <path d={`M${4*s},${-22*s} Q${12*s},${-28*s} ${22*s},${-20*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
      </>
    ),
    angry: () => (
      <>
        <line x1={-24*s} y1={-14*s} x2={-6*s} y2={-22*s}
          stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
        <line x1={6*s} y1={-22*s} x2={24*s} y2={-14*s}
          stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
      </>
    ),
    smirk: () => (
      <>
        <path d={`M${-22*s},${-16*s} Q${-12*s},${-12*s} ${-4*s},${-16*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
        <line x1={4*s} y1={-18*s} x2={22*s} y2={-18*s}
          stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
      </>
    ),
    happy: () => (
      <>
        <path d={`M${-22*s},${-22*s} Q${-12*s},${-28*s} ${-4*s},${-22*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
        <path d={`M${4*s},${-22*s} Q${12*s},${-28*s} ${22*s},${-22*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
      </>
    ),
    love: () => (
      <>
        <path d={`M${-22*s},${-22*s} Q${-12*s},${-30*s} ${-4*s},${-22*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
        <path d={`M${4*s},${-22*s} Q${12*s},${-30*s} ${22*s},${-22*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
      </>
    ),
    stress: () => (
      <>
        <path d={`M${-22*s},${-12*s} Q${-13*s},${-20*s} ${-4*s},${-12*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
        <path d={`M${4*s},${-12*s} Q${13*s},${-20*s} ${22*s},${-12*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
      </>
    ),
    neutral: () => (
      <>
        <line x1={-22*s} y1={-18*s} x2={-4*s} y2={-18*s}
          stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
        <line x1={4*s} y1={-18*s} x2={22*s} y2={-18*s}
          stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
      </>
    ),
  };

  // ── 目 ──────────────────────────────────────────────
  const Eyes: Record<EmotionType, React.FC> = {
    sad: () => (
      <>
        <line x1={-20*s} y1={-4*s} x2={-6*s} y2={-4*s}
          stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
        <line x1={6*s} y1={-4*s} x2={20*s} y2={-4*s}
          stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
      </>
    ),
    talking: () => (
      <>
        <line x1={-20*s} y1={-4*s} x2={-6*s} y2={-4*s}
          stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
        <line x1={6*s} y1={-4*s} x2={20*s} y2={-4*s}
          stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
      </>
    ),
    excited: () => (
      <>
        {/* × 目 */}
        <line x1={-20*s} y1={-8*s} x2={-8*s} y2={2*s}
          stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
        <line x1={-20*s} y1={2*s} x2={-8*s} y2={-8*s}
          stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
        <line x1={8*s} y1={-8*s} x2={20*s} y2={2*s}
          stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
        <line x1={8*s} y1={2*s} x2={20*s} y2={-8*s}
          stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
      </>
    ),
    angry: () => (
      <>
        {/* ＞ 目 */}
        <path d={`M${-20*s},${-8*s} L${-8*s},${-2*s} L${-20*s},${4*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" strokeLinejoin="round" />
        <path d={`M${20*s},${-8*s} L${8*s},${-2*s} L${20*s},${4*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    smirk: () => (
      <>
        <line x1={-20*s} y1={-4*s} x2={-6*s} y2={-4*s}
          stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
        <circle cx={13*s} cy={-2*s} r={5*s} fill="#222" />
      </>
    ),
    happy: () => (
      <>
        {/* へ 目 */}
        <path d={`M${-20*s},${2*s} Q${-13*s},${-8*s} ${-6*s},${2*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
        <path d={`M${6*s},${2*s} Q${13*s},${-8*s} ${20*s},${2*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
      </>
    ),
    love: () => (
      <>
        <path d={`M${-20*s},${2*s} Q${-13*s},${-8*s} ${-6*s},${2*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
        <path d={`M${6*s},${2*s} Q${13*s},${-8*s} ${20*s},${2*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
      </>
    ),
    stress: () => (
      <>
        {/* ～ 目 */}
        <path d={`M${-20*s},${-2*s} Q${-16*s},${-8*s} ${-13*s},${-2*s} Q${-10*s},${4*s} ${-6*s},${-2*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
        <path d={`M${6*s},${-2*s} Q${10*s},${-8*s} ${13*s},${-2*s} Q${16*s},${4*s} ${20*s},${-2*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
      </>
    ),
    neutral: () => (
      <>
        <circle cx={-13*s} cy={-2*s} r={4*s} fill="#222" />
        <circle cx={13*s} cy={-2*s} r={4*s} fill="#222" />
      </>
    ),
  };

  // ── 口 ──────────────────────────────────────────────
  const Mouths: Record<EmotionType, React.FC> = {
    sad: () => (
      <path d={`M${-14*s},${20*s} Q${0},${13*s} ${14*s},${20*s}`}
        fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
    ),
    talking: () => (
      <>
        <path d={`M${-12*s},${16*s} Q${0},${26*s} ${12*s},${16*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
        <path d={`M${-12*s},${16*s} Q${0},${10*s} ${12*s},${16*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
      </>
    ),
    excited: () => (
      <>
        <path d={`M${-16*s},${14*s} Q${0},${28*s} ${16*s},${14*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
        <path d={`M${-16*s},${14*s} Q${0},${8*s} ${16*s},${14*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
        {/* 歯 */}
        <circle cx={-6*s} cy={18*s} r={2.5*s} fill="#222" />
        <circle cx={6*s} cy={18*s} r={2.5*s} fill="#222" />
      </>
    ),
    angry: () => (
      <path d={`M${-14*s},${22*s} Q${0},${14*s} ${14*s},${22*s}`}
        fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
    ),
    smirk: () => (
      <path d={`M${-10*s},${18*s} Q${2*s},${24*s} ${14*s},${16*s}`}
        fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
    ),
    happy: () => (
      <>
        <path d={`M${-14*s},${14*s} Q${0},${26*s} ${14*s},${14*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
        <path d={`M${-14*s},${14*s} Q${0},${8*s} ${14*s},${14*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
      </>
    ),
    love: () => (
      <>
        <path d={`M${-16*s},${14*s} Q${0},${28*s} ${16*s},${14*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
        <path d={`M${-16*s},${14*s} Q${0},${6*s} ${16*s},${14*s}`}
          fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
      </>
    ),
    stress: () => (
      <path d={`M${-12*s},${18*s} Q${0},${14*s} ${12*s},${20*s}`}
        fill="none" stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
    ),
    neutral: () => (
      <line x1={-12*s} y1={18*s} x2={12*s} y2={18*s}
        stroke="#222" strokeWidth={SW*s} strokeLinecap="round" />
    ),
  };

  // ── 頬 (love / excited のみ) ─────────────────────────
  const hasCheek = emotion === "love" || emotion === "excited";

  // ── 汗・スパーク等のエフェクト ─────────────────────
  const Effects: Partial<Record<EmotionType, React.FC>> = {
    sad: () => (
      <path d={`M${28*s},${-10*s} Q${32*s},${0} ${28*s},${8*s}`}
        fill="none" stroke="#6ac" strokeWidth={3*s} strokeLinecap="round" />
    ),
    excited: () => (
      <>
        {[[-30, -30], [32, -24], [-28, -14]].map(([ex, ey], i) => (
          <g key={i} transform={`translate(${ex*s},${ey*s})`}>
            <line x1={0} y1={-6*s} x2={0} y2={6*s} stroke="#f90" strokeWidth={2.5*s} strokeLinecap="round" />
            <line x1={-6*s} y1={0} x2={6*s} y2={0} stroke="#f90" strokeWidth={2.5*s} strokeLinecap="round" />
            <line x1={-4*s} y1={-4*s} x2={4*s} y2={4*s} stroke="#f90" strokeWidth={2*s} strokeLinecap="round" />
            <line x1={4*s} y1={-4*s} x2={-4*s} y2={4*s} stroke="#f90" strokeWidth={2*s} strokeLinecap="round" />
          </g>
        ))}
      </>
    ),
    angry: () => (
      <>
        {[[26, -18], [34, -8]].map(([ex, ey], i) => (
          <path key={i}
            d={`M${ex*s},${(ey+8)*s} Q${(ex+4)*s},${(ey+4)*s} ${ex*s},${ey*s} Q${(ex-4)*s},${(ey-4)*s} ${ex*s},${(ey-8)*s}`}
            fill="none" stroke="#999" strokeWidth={2.5*s} strokeLinecap="round" />
        ))}
      </>
    ),
    love: () => (
      <path
        d={`M${28*s},${-28*s} C${28*s},${-36*s} ${20*s},${-36*s} ${20*s},${-28*s} C${20*s},${-36*s} ${12*s},${-36*s} ${12*s},${-28*s} L${20*s},${-18*s} Z`}
        fill="#e44" />
    ),
    stress: () => (
      <>
        {[[-1, 0], [1, 0], [-1, 0]].map((_, i) => (
          <line key={i}
            x1={(-36+i*4)*s} y1={(10+i*12)*s}
            x2={(-44+i*4)*s} y2={(18+i*12)*s}
            stroke="#aaa" strokeWidth={2*s} strokeLinecap="round" />
        ))}
        {[[-1, 0], [1, 0], [-1, 0]].map((_, i) => (
          <line key={i+'r'}
            x1={(36-i*4)*s} y1={(10+i*12)*s}
            x2={(44-i*4)*s} y2={(18+i*12)*s}
            stroke="#aaa" strokeWidth={2*s} strokeLinecap="round" />
        ))}
      </>
    ),
  };

  const BrowComponent = Brows[emotion] ?? Brows.neutral;
  const EyeComponent = Eyes[emotion] ?? Eyes.neutral;
  const MouthComponent = Mouths[emotion] ?? Mouths.neutral;
  const EffectComponent = Effects[emotion];

  return (
    <>
      {EffectComponent && <EffectComponent />}

      <BrowComponent />
      <EyeComponent />
      <MouthComponent />

      {hasCheek && (
        <>
          <ellipse cx={-26*s} cy={8*s} rx={9*s} ry={5*s} fill="#ffaaaa" opacity={0.55} />
          <ellipse cx={26*s} cy={8*s} rx={9*s} ry={5*s} fill="#ffaaaa" opacity={0.55} />
        </>
      )}
    </>
  );
};
