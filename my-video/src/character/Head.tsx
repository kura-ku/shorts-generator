import React from "react";

type Props = {
  size?: number;
};

export const Head: React.FC<Props> = ({
  size = 44,
}) => {

  return (

    <circle
      cx={0}
      cy={0}
      r={size}
      fill="white"
      stroke="black"
      strokeWidth={4}
    />

  );

};