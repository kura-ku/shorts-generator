import React from "react";

type Props = {
  lean?: number;
};

export const Body: React.FC<Props> = ({
  lean = 0,
}) => {

  return (

    <g transform={`rotate(${lean})`}>

      {/* Neck */}

      <line
        x1="0"
        y1="48"
        x2="0"
        y2="62"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Body */}

      <line
        x1="0"
        y1="62"
        x2="0"
        y2="140"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Shoulder */}

      <line
        x1="-24"
        y1="72"
        x2="24"
        y2="72"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Hip */}

      <line
        x1="-18"
        y1="140"
        x2="18"
        y2="140"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />

    </g>

  );

};