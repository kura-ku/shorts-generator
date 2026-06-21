import { useCurrentFrame } from "remotion";

type Props = {
  animation: string;
};

export const NeoTony = ({ animation }: Props) => {
  const frame = useCurrentFrame();

  const swing = Math.sin(frame * 0.15) * 25;
  const bounce = Math.sin(frame * 0.15) * 8;

  const blink = frame % 120 < 8;

  let leftArm = 0;
  let rightArm = 0;
  let leftLeg = 0;
  let rightLeg = 0;
  let bubble = "";

  if (animation === "think") {
    bubble = frame % 30 < 15 ? "?" : "";
    rightArm = -20;
  }

  if (animation === "talk") {
    bubble = frame % 20 < 10 ? "..." : "";
    leftArm = swing * 0.5;
    rightArm = -swing * 0.5;
  }

  if (animation === "point") {
    rightArm = -90 + swing * 0.2;
  }

  if (animation === "walk") {
    leftArm = swing;
    rightArm = -swing;
    leftLeg = -swing;
    rightLeg = swing;
  }

  return (
    <div
      style={{
        position: "relative",
        width: 420,
        height: 588,
        transform: `translateY(${bounce}px) scale(1.4)`,
        filter: "drop-shadow(0px 8px 12px rgba(0,0,0,0.15))",
      }}
    >
      {bubble && (
        <div
          style={{
            position: "absolute",
            top: 20 + Math.sin(frame * 0.15) * 10,
            left: 210,
            fontSize: 50,
            fontWeight: "bold",
          }}
        >
          {bubble}
        </div>
      )}

      {/* Head */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 110,
          width: 80,
          height: 80,
          border: "6px solid black",
          borderRadius: "50%",
          backgroundColor: "white",
        }}
      >
        {/* Left Glass */}
        <div
          style={{
            position: "absolute",
            top: 25,
            left: 10,
            width: 20,
            height: blink ? 2 : 8,
            backgroundColor: "black",
          }}
        />

        {/* Right Glass */}
        <div
          style={{
            position: "absolute",
            top: 25,
            right: 10,
            width: 20,
            height: blink ? 2 : 8,
            backgroundColor: "black",
          }}
        />

        {/* Bridge */}
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 30,
            width: 20,
            height: 2,
            backgroundColor: "black",
          }}
        />

        {/* Mouth */}
        <div
          style={{
            position: "absolute",
            bottom: 15,
            left: 25,
            width: 25,
            height:
              animation === "talk"
                ? frame % 10 < 5
                  ? 8
                  : 3
                : 4,
            backgroundColor: "black",
            borderRadius: 10,
          }}
        />
      </div>

      {/* Body */}
      <div
        style={{
          position: "absolute",
          top: 120,
          left: 147,
          width: 6,
          height: 120,
          backgroundColor: "black",
        }}
      />

      {/* Tie */}
      <div
        style={{
          position: "absolute",
          top: 125,
          left: 138,
          width: 18,
          height: 30,
          backgroundColor: "#2563eb",
          clipPath: "polygon(50% 0%,100% 100%,0% 100%)",
        }}
      />

      {/* Left Arm */}
      <div
        style={{
          position: "absolute",
          top: 150,
          left: 90,
          width: 70,
          height: 6,
          backgroundColor: "black",
          transformOrigin: "right center",
          transform: `rotate(${leftArm}deg)`,
        }}
      />

      {/* Right Arm */}
      <div
        style={{
          position: "absolute",
          top: 150,
          left: 150,
          width: 70,
          height: 6,
          backgroundColor: "black",
          transformOrigin: "left center",
          transform: `rotate(${rightArm}deg)`,
        }}
      />

      {/* Left Leg */}
      <div
        style={{
          position: "absolute",
          top: 240,
          left: 120,
          width: 6,
          height: 100,
          backgroundColor: "black",
          transformOrigin: "top center",
          transform: `rotate(${leftLeg}deg)`,
        }}
      />

      {/* Right Leg */}
      <div
        style={{
          position: "absolute",
          top: 240,
          left: 170,
          width: 6,
          height: 100,
          backgroundColor: "black",
          transformOrigin: "top center",
          transform: `rotate(${rightLeg}deg)`,
        }}
      />
    </div>
  );
};