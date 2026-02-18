import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { COLORS } from "./shared/theme";
import { fade } from "./shared/animations";

// Phase 3: 180–270 frames (6s–9s)
// Data consolidates into a lead card, status badge animates, counter ticks

export default function LeadCaptured() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const f = frame - 180;
  if (f < 0) return null;

  // Overall phase visibility
  const phaseOpacity = fade(frame, 180, 190, 260, 275);

  // Card entrance — spring
  const cardSpring = f >= 0 ? spring({
    frame: f,
    fps,
    config: { damping: 18, stiffness: 80, mass: 0.9 },
  }) : 0;

  const cardScale = interpolate(cardSpring, [0, 1], [0.96, 1]);
  const cardOpacity = interpolate(cardSpring, [0, 1], [0, 1]);

  // Status badge transition: "New" → "Qualified"
  const isQualified = f > 40;
  const badgeSpring = f > 40 ? spring({
    frame: f - 40,
    fps,
    config: { damping: 14, stiffness: 100, mass: 0.6 },
  }) : 0;

  const badgeColor = isQualified ? COLORS.green : COLORS.accent;
  const badgeText = isQualified ? "Qualified" : "New";
  const badgeScale = isQualified ? interpolate(badgeSpring, [0, 1], [1.15, 1]) : 1;

  // Checkmark draw for qualified state
  const checkProgress = isQualified ? badgeSpring : 0;

  // Routing arrow
  const arrowProgress = fade(f, 50, 70);
  const arrowX = interpolate(arrowProgress, [0, 1], [-10, 0]);

  // Counter
  const counterOpacity = fade(f, 10, 25);
  const counterValue = interpolate(f, [10, 50], [2847, 2848], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
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
      {/* Lead card */}
      <div
        style={{
          opacity: cardOpacity,
          transform: `scale(${cardScale})`,
          padding: "20px 28px",
          borderRadius: 12,
          border: `1px solid ${COLORS.border}`,
          backgroundColor: "rgba(20, 20, 22, 0.7)",
          display: "flex",
          alignItems: "center",
          gap: 20,
          minWidth: 320,
        }}
      >
        {/* Lead info */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 15,
              color: COLORS.textWhite,
              fontWeight: 500,
            }}
          >
            James T.
          </div>
          <div
            style={{
              fontSize: 12,
              color: COLORS.textMuted,
              marginTop: 3,
              fontFamily: "monospace",
            }}
          >
            Boiler Repair &middot; Manchester
          </div>
        </div>

        {/* Status badge */}
        <div
          style={{
            transform: `scale(${badgeScale})`,
            display: "flex",
            alignItems: "center",
            gap: 5,
            padding: "5px 12px",
            borderRadius: 12,
            backgroundColor: `${badgeColor}15`,
            border: `1px solid ${badgeColor}30`,
          }}
        >
          {isQualified && (
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              style={{ opacity: checkProgress }}
            >
              <path
                d="M2.5 5.5L4.5 7.5L8.5 3.5"
                stroke={COLORS.green}
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="10"
                strokeDashoffset={interpolate(checkProgress, [0, 1], [10, 0])}
              />
            </svg>
          )}
          <span
            style={{
              fontSize: 10,
              fontFamily: "monospace",
              color: badgeColor,
              letterSpacing: "0.04em",
            }}
          >
            {badgeText}
          </span>
        </div>
      </div>

      {/* Routing arrow */}
      <div
        style={{
          marginTop: 20,
          opacity: arrowProgress,
          transform: `translateX(${arrowX}px)`,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div
          style={{
            width: 60,
            height: 1,
            background: `linear-gradient(to right, transparent, ${COLORS.accent}40)`,
          }}
        />
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M2 6h8M7 3l3 3-3 3"
            stroke={COLORS.accent}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.5}
          />
        </svg>
        <span
          style={{
            fontSize: 9,
            fontFamily: "monospace",
            color: COLORS.textMuted,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Booked
        </span>
      </div>

      {/* Counter — bottom right area */}
      <div
        style={{
          position: "absolute",
          bottom: 50,
          right: 50,
          opacity: counterOpacity,
          textAlign: "right",
        }}
      >
        <div
          style={{
            fontSize: 9,
            fontFamily: "monospace",
            color: COLORS.textMuted,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: 4,
          }}
        >
          Leads captured
        </div>
        <div
          style={{
            fontSize: 22,
            fontFamily: "monospace",
            color: COLORS.textBody,
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          {Math.floor(counterValue).toLocaleString()}
        </div>
      </div>
    </div>
  );
}
