import React from "react";

import { Head } from "./Head";
import { Eyes, EyeExpression } from "./Eyes";
import { Eyebrows } from "./Eyebrows";
import { Mouth } from "./Mouth";

type Props = {
  expression: EyeExpression;
};

export const Face: React.FC<Props> = ({
  expression,
}) => {

  return (

    <g>

      <Head />

      <Eyebrows
        expression={expression}
      />

      <Eyes
        expression={expression}
      />

      <Mouth
        expression={expression}
      />

    </g>

  );

};