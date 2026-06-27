import { interpolate } from "remotion";

export function getWordScale(
  active: boolean,
  frame: number
) {
  if (!active) {
    return 1;
  }

  return interpolate(
    frame,
    [0, 3],
    [1.25, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
}

export function getWordOpacity(
  active: boolean
) {
  return active ? 1 : 0.95;
}