import React from "react";

type Props = {

  x: number;

  y: number;

  rotation?: number;

};

export const Foot: React.FC<Props> = ({

  x,

  y,

  rotation = 0,

}) => {

  return (

    <g
      transform={`translate(${x} ${y}) rotate(${rotation})`}
    >

      <ellipse

        cx={0}

        cy={0}

        rx={12}

        ry={5}

        fill="white"

        stroke="black"

        strokeWidth={3}

      />

    </g>

  );

};