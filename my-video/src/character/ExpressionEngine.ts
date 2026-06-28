import { EyeExpression } from "./Eyes";
import { PoseType } from "./PoseEngine";
import { EffectType } from "./EffectEngine";
import { AccessoryType } from "./Accessory";

export type ExpressionResult = {
  expression: EyeExpression;
  pose: PoseType;
  effect: EffectType;
  accessory: AccessoryType;
};

export function analyzeEmotion(
  text: string
): ExpressionResult {

  const t = text.toLowerCase();

  // 怒る
  if (
    t.includes("angry") ||
    t.includes("furious") ||
    t.includes("mad")
  ) {

    return {
      expression: "angry",
      pose: "angry",
      effect: "anger",
      accessory: "anger",
    };

  }

  // 考える
  if (
    t.includes("idea") ||
    t.includes("think") ||
    t.includes("invent")
  ) {

    return {
      expression: "thinking",
      pose: "thinking",
      effect: "question",
      accessory: "idea",
    };

  }

  // 悲しい
  if (
    t.includes("sad") ||
    t.includes("cry") ||
    t.includes("lost")
  ) {

    return {
      expression: "sad",
      pose: "sad",
      effect: "tear",
      accessory: "sweat",
    };

  }

  // 驚き
  if (
    t.includes("wow") ||
    t.includes("surprise") ||
    t.includes("amazing")
  ) {

    return {
      expression: "surprised",
      pose: "celebrate",
      effect: "surprised",
      accessory: "surprised",
    };

  }

  // 成功・勝利
  if (
    t.includes("success") ||
    t.includes("win") ||
    t.includes("goal")
  ) {

    return {
      expression: "happy",
      pose: "celebrate",
      effect: "sparkle",
      accessory: "crown",
    };

  }

  // デフォルト
  return {

    expression: "neutral",
    pose: "idle",
    effect: "none",
    accessory: "none",

  };

}