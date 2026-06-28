export type Expression =
  | "normal"
  | "happy"
  | "sad"
  | "cry"
  | "angry"
  | "love"
  | "surprised"
  | "embarrassed";

export type FaceState = {
  leftEye: string;
  rightEye: string;
  leftBrow: number;
  rightBrow: number;
  mouth: "smile" | "sad" | "open" | "flat" | "love";
  blush: boolean;
  tears: boolean;
  sweat: boolean;
  heart: boolean;
};

export const getExpression = (
  expression: Expression,
): FaceState => {
  const base: FaceState = {
    leftEye: "•",
    rightEye: "•",
    leftBrow: 0,
    rightBrow: 0,
    mouth: "flat",
    blush: false,
    tears: false,
    sweat: false,
    heart: false,
  };

  switch (expression) {
    case "happy":
      return {
        ...base,
        leftEye: "^",
        rightEye: "^",
        leftBrow: -12,
        rightBrow: 12,
        mouth: "smile",
        blush: true,
      };

    case "sad":
      return {
        ...base,
        leftEye: "•",
        rightEye: "•",
        leftBrow: 16,
        rightBrow: -16,
        mouth: "sad",
      };

    case "cry":
      return {
        ...base,
        leftEye: "T",
        rightEye: "T",
        leftBrow: 18,
        rightBrow: -18,
        mouth: "sad",
        tears: true,
      };

    case "angry":
      return {
        ...base,
        leftEye: ">",
        rightEye: "<",
        leftBrow: 28,
        rightBrow: -28,
        mouth: "flat",
      };

    case "love":
      return {
        ...base,
        leftEye: "♥",
        rightEye: "♥",
        mouth: "love",
        blush: true,
        heart: true,
      };

    case "surprised":
      return {
        ...base,
        leftEye: "O",
        rightEye: "O",
        mouth: "open",
      };

    case "embarrassed":
      return {
        ...base,
        leftEye: "•",
        rightEye: "•",
        mouth: "smile",
        blush: true,
        sweat: true,
      };

    default:
      return base;
  }
};