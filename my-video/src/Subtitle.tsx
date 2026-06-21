import React from "react";

type Props = {
text: string;
};

const HIGHLIGHT_WORDS = [
"SMART",
"BROKE",
"ASSETS",
"WEALTHY",
"FREEDOM",
"KNOWLEDGE",
];

const splitText = (text: string) => {
const words = text.toUpperCase().split(" ");

const middle = Math.ceil(words.length / 2);

return [
words.slice(0, middle),
words.slice(middle),
];
};

const renderWords = (words: string[]) => {
return words.map((word, index) => {
const highlight =
HIGHLIGHT_WORDS.indexOf(
word.replace(/[.,!?]/g, "")
) !== -1;

return (
  <span
    key={index}
    style={{
      color: highlight ? "#FFD60A" : "white",
      marginRight: 12,
    }}
  >
    {word}
  </span>
);

});
};

export const Subtitle: React.FC<Props> = ({
text,
}) => {
const [line1, line2] = splitText(text);

return (
<div
style={{
position: "absolute",
bottom: 180,
width: "100%",
textAlign: "center",
padding: "0 40px",
zIndex: 30,
}}
>
<div
style={{
fontSize: 64,
fontWeight: 900,
WebkitTextStroke: "4px black",
textShadow:
"0 0 20px rgba(0,0,0,0.7)",
lineHeight: 1.1,
}}
> <div>{renderWords(line1)}</div>

```
    {line2.length > 0 && (
      <div>{renderWords(line2)}</div>
    )}
  </div>
</div>

);
};
