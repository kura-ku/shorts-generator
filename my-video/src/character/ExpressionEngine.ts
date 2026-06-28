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

  // 怒り
  if (
    t.includes("angry") ||
    t.includes("furious") ||
    t.includes("mad") ||
    t.includes("hate") ||
    t.includes("rage")
  ) {
    return {
      expression: "angry",
      pose: "angry",
      effect: "anger",
      accessory: "anger",
    };
  }

  // 喜び
  if (
    t.includes("happy") ||
    t.includes("great") ||
    t.includes("awesome") ||
    t.includes("good") ||
    t.includes("love") ||
    t.includes("success") ||
    t.includes("win") ||
    t.includes("goal") ||
    t.includes("congrat")
  ) {
    return {
      expression: "happy",
      pose: "celebrate",
      effect: "sparkle",
      accessory: "crown",
    };
  }

  // 考える
  if (
    t.includes("think") ||
    t.includes("idea") ||
    t.includes("invent") ||
    t.includes("maybe") ||
    t.includes("why") ||
    t.includes("how")
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
    t.includes("lost") ||
    t.includes("alone") ||
    t.includes("fail") ||
    t.includes("broken")
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
    t.includes("amazing") ||
    t.includes("unbelievable") ||
    t.includes("really") ||
    t.includes("what")
  ) {
    return {
      expression: "surprised",
      pose: "celebrate",
      effect: "surprised",
      accessory: "surprised",
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