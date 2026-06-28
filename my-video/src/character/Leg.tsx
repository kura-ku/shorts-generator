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

  const style = {
    stroke: "black",
    strokeWidth: 4,
    strokeLinecap: "round" as const,
    fill: "none",
  };

  switch (pose) {

    case "walk":

      return (

        <g {...style}>

          {/* Left */}

          <line
            x1={-10}
            y1={138}
            x2={-34}
            y2={188}
          />

          <line
            x1={-34}
            y1={188}
            x2={-46}
            y2={220}
          />

          {/* Right */}

          <line
            x1={10}
            y1={138}
            x2={24}
            y2={186}
          />

          <line
            x1={24}
            y1={186}
            x2={18}
            y2={220}
          />

          <Foot
            x={-46}
            y={220}
            rotation={-12}
          />

          <Foot
            x={18}
            y={220}
            rotation={10}
          />

        </g>

      );

    case "run":

      return (

        <g {...style}>

          <line
            x1={-10}
            y1={138}
            x2={-46}
            y2={170}
          />

          <line
            x1={-46}
            y1={170}
            x2={-66}
            y2={198}
          />

          <line
            x1={10}
            y1={138}
            x2={42}
            y2={196}
          />

          <line
            x1={42}
            y1={196}
            x2={62}
            y2={220}
          />

          <Foot
            x={-66}
            y={198}
            rotation={-25}
          />

          <Foot
            x={62}
            y={220}
            rotation={18}
          />

        </g>

      );

    case "jump":

      return (

        <g {...style}>

          <line
            x1={-10}
            y1={138}
            x2={-28}
            y2={176}
          />

          <line
            x1={-28}
            y1={176}
            x2={-42}
            y2={198}
          />

          <line
            x1={10}
            y1={138}
            x2={28}
            y2={176}
          />

          <line
            x1={28}
            y1={176}
            x2={42}
            y2={198}
          />

          <Foot
            x={-42}
            y={198}
            rotation={-18}
          />

          <Foot
            x={42}
            y={198}
            rotation={18}
          />

        </g>

      );

    case "sit":

      return (

        <g {...style}>

          <line
            x1={-10}
            y1={138}
            x2={-34}
            y2={160}
          />

          <line
            x1={-34}
            y1={160}
            x2={-34}
            y2={206}
          />

          <line
            x1={10}
            y1={138}
            x2={34}
            y2={160}
          />

          <line
            x1={34}
            y1={160}
            x2={34}
            y2={206}
          />

          <Foot
            x={-34}
            y={206}
          />

          <Foot
            x={34}
            y={206}
          />

        </g>

      );

    default:

      return (

        <g {...style}>

          <line
            x1={-10}
            y1={138}
            x2={-18}
            y2={186}
          />

          <line
            x1={-18}
            y1={186}
            x2={-24}
            y2={220}
          />

          <line
            x1={10}
            y1={138}
            x2={18}
            y2={186}
          />

          <line
            x1={18}
            y1={186}
            x2={24}
            y2={220}
          />

          <Foot
            x={-24}
            y={220}
          />

          <Foot
            x={24}
            y={220}
          />

        </g>

      );

  }

};