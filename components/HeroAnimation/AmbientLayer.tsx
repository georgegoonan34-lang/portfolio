import { useCurrentFrame, interpolate } from "remotion";
import { COLORS } from "./shared/theme";

export default function AmbientLayer() {
  const frame = useCurrentFrame();

  // Gentle pulsing for the Live dot
  const pulse = interpolate(
    Math.sin(frame * 0.06),
    [-1, 1],
    [0.4, 1]
  );

  // Dot grid
  const dots: { x: number; y: number }[] = [];
  const spacing = 32;
  for (let x = spacing; x < 600; x += spacing) {
    for (let y = spacing; y < 480; y += spacing) {
      dots.push({ x, y });
    }
  }

  return (
    <>
      {/* Dot grid background */}
      <svg
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
        }}
      >
        {dots.map((dot, i) => (
          <circle
            key={i}
            cx={dot.x}
            cy={dot.y}
            r={0.8}
            fill="#FFFFFF"
          />
        ))}
      </svg>

      {/* Live indicator — top right */}
      <div
        style={{
          position: "absolute",
          top: 16,
          right: 20,
          display: "flex",
          alignItems: "center",
          gap: 6,
          opacity: 0.7,
        }}
      >
        <div
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            backgroundColor: COLORS.green,
            opacity: pulse,
            boxShadow: `0 0 ${4 * pulse}px ${COLORS.green}`,
          }}
        />
        <span
          style={{
            fontSize: 9,
            fontFamily: "monospace",
            color: COLORS.textMuted,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Live
        </span>
      </div>
    </>
  );
}
