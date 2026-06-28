import React from "react";

export type HairStyle =
  | "none"
  | "default"
  | "messy"
  | "spiky";

type Props = {
  style?: HairStyle;
};

export const Hair: React.FC<Props> = ({
  style = "default",
}) => {

  if (style === "none") {
    return null;
  }

  return (

    <g
      fill="black"
      stroke="black"
      strokeWidth={2}
    >

      {style === "default" && (

        <>

          <path d="
            M-42 -12
            Q-34 -48 -12 -46
            Q0 -56 12 -46
            Q34 -48 42 -12
            Z
          "/>

          {/* アホ毛 */}

          <path
            d="
              M2 -44
              Q8 -62
              -2 -74
            "
            fill="none"
            strokeWidth={3}
          />

        </>

      )}

      {style === "messy" && (

        <>

          <polygon
            points="
            -40,-8
            -32,-40
            -18,-52
            -6,-42
            8,-58
            20,-44
            34,-52
            42,-8
            "
          />

        </>

      )}

      {style === "spiky" && (

        <>

          <polygon
            points="
            -40,-10
            -30,-46
            -18,-28
            -4,-58
            10,-26
            22,-52
            34,-20
            42,-8
            "
          />

        </>

      )}

    </g>

  );

};