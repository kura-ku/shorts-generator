import React from "react";

type Props = {
  scale?: number;
};

export const Shadow: React.FC<Props> = ({
  scale = 1,
}) => {

  return (

    <ellipse
      cx={0}
      cy={225}
      rx={40 * scale}
      ry={10 * scale}
      fill="rgba(0,0,0,0.15)"
    />

  );

};