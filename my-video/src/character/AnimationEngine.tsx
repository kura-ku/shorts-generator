import React from "react";
import { useCurrentFrame } from "remotion";

type Props = {
  children: React.ReactNode;
  animation?:
    | "none"
    | "idle"
    | "walk"
    | "run"
    | "jump"
    | "shake";
};

export const AnimationEngine: React.FC<Props> = ({
  children,
  animation = "none",
}) => {

  const frame = useCurrentFrame();

  let translateY = 0;
  let rotate = 0;
  let scale = 1;

  switch (animation) {

    case "idle":
      translateY =
        Math.sin(frame / 12) * 2;
      break;

    case "walk":
      translateY =
        Math.sin(frame / 4) * 4;
      break;

    case "run":
      translateY =
        Math.sin(frame / 2) * 8;

      rotate =
        Math.sin(frame / 3) * 4;
      break;

    case "jump":

      translateY =
        -Math.abs(
          Math.sin(frame / 10)
        ) * 30;

      break;

    case "shake":

      rotate =
        Math.sin(frame) * 4;

      break;

    default:
      break;

  }

  return (

    <g
      transform={`
        translate(0 ${translateY})
        rotate(${rotate})
        scale(${scale})
      `}
    >

      {children}

    </g>

  );

};