import { ClothesType } from "./Clothes";
import { HairStyle } from "./Hair";
import { AccessoryType } from "./Accessory";
import { EyeExpression } from "./Eyes";

export type CharacterTheme =
  | "neoTony"
  | "business"
  | "student"
  | "creator"
  | "dark";

export type ThemeResult = {

  clothes: ClothesType;

  hair: HairStyle;

  accessory: AccessoryType;

  expression: EyeExpression;

};

export function getTheme(

  theme: CharacterTheme

): ThemeResult {

  switch (theme) {

    case "business":

      return {

        clothes: "suit",

        hair: "default",

        accessory: "glasses",

        expression: "neutral",

      };

    case "student":

      return {

        clothes: "shirt",

        hair: "messy",

        accessory: "none",

        expression: "happy",

      };

    case "creator":

      return {

        clothes: "hoodie",

        hair: "spiky",

        accessory: "idea",

        expression: "thinking",

      };

    case "dark":

      return {

        clothes: "suit",

        hair: "spiky",

        accessory: "anger",

        expression: "angry",

      };

    default:

      return {

        clothes: "hoodie",

        hair: "default",

        accessory: "none",

        expression: "neutral",

      };

  }

}