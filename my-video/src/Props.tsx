type PropsType = {
  propsList: string[];
  frame: number;
};

export const SceneProps = ({
  propsList,
  frame,
}: PropsType) => {
  const slide = Math.max(0, 100 - frame);

  return (
    <>
      {/* Books */}
      {propsList.indexOf("books") !== -1 && (
        <svg
          width="140"
          height="140"
          viewBox="0 0 140 140"
          style={{
            position: "absolute",
            left: 120,
            bottom: 250,
            transform: `translateX(-${slide}px)`,
          }}
        >
          <rect
            x="20"
            y="30"
            width="25"
            height="80"
            fill="rgb(37,99,235)"
          />

          <rect
            x="50"
            y="20"
            width="25"
            height="90"
            fill="rgb(220,38,38)"
          />

          <rect
            x="80"
            y="25"
            width="25"
            height="85"
            fill="rgb(22,163,74)"
          />

          <rect
            x="15"
            y="110"
            width="100"
            height="6"
            fill="rgb(51,51,51)"
          />
        </svg>
      )}

      {/* Certificate */}
      {propsList.indexOf("certificate") !== -1 && (
        <svg
          width="160"
          height="160"
          viewBox="0 0 160 160"
          style={{
            position: "absolute",
            right: 100,
            bottom: 250,
            transform: `translateX(${slide}px)`,
          }}
        >
          <rect
            x="30"
            y="20"
            width="90"
            height="110"
            fill="white"
            stroke="rgb(51,51,51)"
            strokeWidth="4"
          />

          <line
            x1="45"
            y1="50"
            x2="105"
            y2="50"
            stroke="rgb(153,153,153)"
            strokeWidth="3"
          />

          <line
            x1="45"
            y1="70"
            x2="105"
            y2="70"
            stroke="rgb(153,153,153)"
            strokeWidth="3"
          />

          <circle
            cx="75"
            cy="105"
            r="15"
            fill="rgb(250,204,21)"
          />

          <polygon
            points="65,118 72,145 75,135 78,145 85,118"
            fill="rgb(220,38,38)"
          />
        </svg>
      )}

      {/* Growth Chart */}
      {propsList.indexOf("growth-chart") !== -1 && (
        <svg
          width="220"
          height="180"
          viewBox="0 0 220 180"
          style={{
            position: "absolute",
            right: 60,
            bottom: 220,
            transform: `translateY(${slide}px)`,
          }}
        >
          <line
            x1="30"
            y1="150"
            x2="180"
            y2="150"
            stroke="rgb(51,51,51)"
            strokeWidth="4"
          />

          <line
            x1="30"
            y1="150"
            x2="30"
            y2="20"
            stroke="rgb(51,51,51)"
            strokeWidth="4"
          />

          <polyline
            points="40,130 80,110 110,100 140,70 180,30"
            fill="none"
            stroke="rgb(34,197,94)"
            strokeWidth="8"
          />

          <polygon
            points="180,30 165,35 172,45"
            fill="rgb(34,197,94)"
          />
        </svg>
      )}
    </>
  );
};