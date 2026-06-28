import { analyzeEmotion } from "../character/ExpressionEngine";

export function getExpression(
  text: string
) {

  return analyzeEmotion(text);

}