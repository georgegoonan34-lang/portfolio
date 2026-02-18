import { useCurrentFrame, interpolate } from "remotion";
import { COLORS } from "./shared/theme";
import { fade } from "./shared/animations";

// Phase 1: 0–75 frames (0s–2.5s)
export default function IncomingCall() {
  const frame = useCurrentFrame();

  // Overall phase visibility
  const phaseOpacity = fade(frame, 0, 8, 65, 75);

  // Ring pulse cycles (3 pulses)
  const ringPhase = (frame * 0.08) % 1;

  // Caller ID text
  const callerOpacity = fade(frame, 15, 30);
  const callerY = interpolate(
    fade(frame, 15, 30),
    [0, 1],
    [8, 0]
  );

  // Generate 3 staggered ring circles
  const rings = [0, 0.33, 0.66].map((offset) => {
    const t = ((frame * 0.04 + offset) % 1);
    return {
      scale: interpolate(t, [0, 1], [1, 3]),
      opacity: interpolate(t, [0, 0.2, 1], [0, 0.5, 0]),
    };
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: phaseOpacity,
      }}
    >
      {/* Ring ripples */}
      <div style={{ position: "relative", width: 80, height: 80 }}>
        {rings.map((ring, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: `1px solid ${COLORS.accent}`,
              transform: `scale(${ring.scale})`,
              opacity: ring.opacity,
            }}
          />
        ))}

        {/* Phone icon center */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
              stroke={COLORS.accent}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Caller label */}
      <div
        style={{
          marginTop: 28,
          opacity: callerOpacity,
          transform: `translateY(${callerY}px)`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 12,
            fontFamily: "monospace",
            color: COLORS.textMuted,
            letterSpacing: "0.06em",
          }}
        >
          Incoming &middot; 07XXX XXX XXX
        </div>
      </div>
    </div>
  );
}
