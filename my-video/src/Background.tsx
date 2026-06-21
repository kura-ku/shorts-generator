type Props = {
  background: string;
};

export const Background = ({ background }: Props) => {
  let bg =
    "linear-gradient(to bottom,#f0f4f8,#ffffff)";

  if (background === "office") {
    bg =
      "linear-gradient(to bottom,#dbeafe,#ffffff)";
  }

  if (background === "study") {
    bg =
      "linear-gradient(to bottom,#fef3c7,#ffffff)";
  }

  if (background === "chart") {
    bg =
      "linear-gradient(to bottom,#dcfce7,#ffffff)";
  }

  if (background === "success") {
    bg =
      "linear-gradient(to bottom,#ddd6fe,#ffffff)";
  }

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: bg,
      }}
    />
  );
};