import React from "react";

export type EmotionLineType =
  | "none"
  | "happy"
  | "angry"
  | "sad"
  | "surprised"
  | "cry";

type Props = {
  type?: EmotionLineType;
};

export const EmotionLines: React.FC<Props> = ({
  type = "none",
}) => {

  const style = {
    stroke: "black",
    strokeWidth: 3,
    strokeLinecap: "round" as const,
    fill: "none",
  };

  switch (type) {

    case "happy":

      return (

        <g {...style}>

          <line x1={-46} y1={-28} x2={-54} y2={-42} />
          <line x1={-36} y1={-22} x2={-42} y2={-36} />

          <line x1={46} y1={-28} x2={54} y2={-42} />
          <line x1={36} y1={-22} x2={42} y2={-36} />

        </g>

      );

    case "surprised":

      return (

        <g {...style}>

          <line x1={-30} y1={-60} x2={-30} y2={-42} />
          <line x1={0} y1={-68} x2={0} y2={-48} />
          <line x1={30} y1={-60} x2={30} y2={-42} />

        </g>

      );

    case "angry":

      return (

        <g {...style}>

          <line x1={50} y1={-42} x2={62} y2={-30}/>
          <line x1={62} y1={-42} x2={50} y2={-30}/>
          <line x1={56} y1={-50} x2={56} y2={-22}/>
          <line x1={44} y1={-36} x2={68} y2={-36}/>

        </g>

      );

    case "sad":

      return (

        <g {...style}>

          <line x1={-12} y1={-62} x2={-12} y2={-44}/>
          <line x1={0} y1={-66} x2={0} y2={-42}/>
          <line x1={12} y1={-62} x2={12} y2={-44}/>

        </g>

      );

    case "cry":

      return (

        <g {...style}>

          <path d="M-18 4 C-22 20 -18 34 -24 46" />

          <path d="M18 4 C22 20 18 34 24 46" />

        </g>

      );

    default:

      return null;

  }

};