import React from "react";
import {
  interpolate,
  useCurrentFrame,
} from "remotion";

type AnimationType =
  | "none"
  | "idle"
  | "walk"
  | "run"
  | "jump"
  | "shake";

type Props = {
  animation?: AnimationType;
  children: React.ReactNode;
};

export const AnimationEngine: React.FC<Props> = ({
  animation = "none",
  children,
}) => {

  const frame = useCurrentFrame();

  let translateY = 0;
  let translateX = 0;
  let rotate = 0;
  let scale = 1;

  switch (animation) {

    case "idle":

      translateY = Math.sin(frame / 18) * 2;

      break;

    case "walk":

      translateY = Math.sin(frame / 4) * 4;

      rotate = Math.sin(frame / 6) * 2;

      break;

    case "run":

      translateY = Math.sin(frame / 2.2) * 8;

      rotate = Math.sin(frame / 3) * 5;

      break;

    case "jump":

      translateY = interpolate(
        Math.sin(frame / 12),
        [-1, 1],
        [0, -26]
      );

      scale = interpolate(
        Math.sin(frame / 12),
        [-1, 1],
        [1, 1.05]
      );

      break;

    case "shake":

      translateX = Math.sin(frame * 0.9) * 6;

      rotate = Math.sin(frame * 0.8) * 4;

      break;

    default:

      break;

  }

  return (

    <g
      transform={`
        translate(${translateX} ${translateY})
        rotate(${rotate})
        scale(${scale})
      `}
    >

      {children}

    </g>

  );

};