import React from "react";
import { Foot } from "./Foot";

export type LegPose =
  | "idle"
  | "walk"
  | "run"
  | "jump"
  | "sit";

type Props = {
  pose?: LegPose;
};

export const Leg: React.FC<Props> = ({
  pose = "idle",
}) => {

  const stroke = {
    stroke: "black",
    strokeWidth: 4,
    strokeLinecap: "round" as const,
    fill: "none",
  };

  switch (pose) {

    // 通常立ち
    case "idle":
      return (
        <g {...stroke}>

          <line
            x1={-12}
            y1={140}
            x2={-24}
            y2={210}
          />

          <line
            x1={12}
            y1={140}
            x2={24}
            y2={210}
          />

          <Foot
            x={-24}
            y={210}
          />

          <Foot
            x={24}
            y={210}
          />

        </g>
      );

    // 歩く
    case "walk":
      return (
        <g {...stroke}>

          <line
            x1={-12}
            y1={140}
            x2={-38}
            y2={205}
          />

          <line
            x1={12}
            y1={140}
            x2={20}
            y2={210}
          />

          <Foot
            x={-38}
            y={205}
            rotation={-12}
          />

          <Foot
            x={20}
            y={210}
            rotation={8}
          />

        </g>
      );

    // 走る
    case "run":
      return (
        <g {...stroke}>

          <line
            x1={-12}
            y1={140}
            x2={-48}
            y2={190}
          />

          <line
            x1={12}
            y1={140}
            x2={48}
            y2={182}
          />

          <Foot
            x={-48}
            y={190}
            rotation={-24}
          />

          <Foot
            x={48}
            y={182}
            rotation={22}
          />

        </g>
      );

    // ジャンプ
    case "jump":
      return (
        <g {...stroke}>

          <line
            x1={-12}
            y1={140}
            x2={-34}
            y2={184}
          />

          <line
            x1={12}
            y1={140}
            x2={34}
            y2={184}
          />

          <Foot
            x={-34}
            y={184}
            rotation={-18}
          />

          <Foot
            x={34}
            y={184}
            rotation={18}
          />

        </g>
      );

    // 座る
    case "sit":
      return (
        <g {...stroke}>

          <line
            x1={-12}
            y1={140}
            x2={-40}
            y2={160}
          />

          <line
            x1={-40}
            y1={160}
            x2={-40}
            y2={205}
          />

          <line
            x1={12}
            y1={140}
            x2={40}
            y2={160}
          />

          <line
            x1={40}
            y1={160}
            x2={40}
            y2={205}
          />

          <Foot
            x={-40}
            y={205}
          />

          <Foot
            x={40}
            y={205}
          />

        </g>
      );

    default:
      return null;

  }

};