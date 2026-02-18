import { useCurrentFrame, interpolate } from "remotion";
import { COLORS } from "./shared/theme";
import { fade } from "./shared/animations";

// Phase 2: 75–180 frames (2.5s–6s)
// Transcript lines appear, then data points extract from the conversation

const transcriptLines = [
  { width: 180, delay: 0 },
  { width: 140, delay: 5 },
  { width: 200, delay: 10 },
  { width: 120, delay: 15 },
  { width: 160, delay: 20 },
];

const dataPoints = [
  { label: "Job type", value: "Boiler Repair", delay: 40 },
  { label: "Location", value: "Manchester, M4", delay: 52 },
  { label: "Urgency", value: "Same day", delay: 64, urgent: true },
];

export default function AIConversation() {
  const frame = useCurrentFrame();

  // Phase-relative frame (starts at frame 75)
  const f = frame - 75;
  if (f < 0) return null;

  // Overall phase visibility
  const phaseOpacity = fade(frame, 75, 83, 170, 180);

  // Typing indicator pulse
  const typingOpacity = f < 70 ? interpolate(
    Math.sin(f * 0.2),
    [-1, 1],
    [0.3, 0.8]
  ) : 0;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        opacity: phaseOpacity,
        padding: "60px 40px 40px",
      }}
    >
      {/* Left side: Transcript lines */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          justifyContent: "center",
        }}
      >
        {transcriptLines.map((line, i) => {
          const lineOpacity = fade(f, line.delay, line.delay + 8);
          const lineX = interpolate(
            fade(f, line.delay, line.delay + 10),
            [0, 1],
            [-12, 0]
          );
          return (
            <div
              key={i}
              style={{
                opacity: lineOpacity,
                transform: `translateX(${lineX}px)`,
                height: 3,
                width: line.width,
                borderRadius: 1.5,
                backgroundColor:
                  i % 2 === 0
                    ? "rgba(232, 232, 237, 0.12)"
                    : "rgba(232, 232, 237, 0.07)",
              }}
            />
          );
        })}

        {/* Typing indicator */}
        <div
          style={{
            display: "flex",
            gap: 4,
            marginTop: 4,
            opacity: typingOpacity,
          }}
        >
          {[0, 1, 2].map((dot) => (
            <div
              key={dot}
              style={{
                width: 3,
                height: 3,
                borderRadius: "50%",
                backgroundColor: COLORS.textMuted,
                opacity: interpolate(
                  Math.sin(f * 0.15 + dot * 1.2),
                  [-1, 1],
                  [0.3, 1]
                ),
              }}
            />
          ))}
        </div>
      </div>

      {/* Right side: Extracted data points */}
      <div
        style={{
          width: 180,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 16,
          paddingLeft: 24,
        }}
      >
        {dataPoints.map((dp, i) => {
          const dpOpacity = fade(f, dp.delay, dp.delay + 10);
          const dpY = interpolate(
            fade(f, dp.delay, dp.delay + 12),
            [0, 1],
            [8, 0]
          );
          const underlineWidth = interpolate(
            fade(f, dp.delay + 4, dp.delay + 16),
            [0, 1],
            [0, 1]
          );

          return (
            <div
              key={i}
              style={{
                opacity: dpOpacity,
                transform: `translateY(${dpY}px)`,
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
                {dp.label}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: COLORS.textBody,
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {dp.urgent && (
                  <div
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      backgroundColor: COLORS.accent,
                      flexShrink: 0,
                    }}
                  />
                )}
                {dp.value}
              </div>
              {/* Gold underline */}
              <div
                style={{
                  height: 1,
                  marginTop: 4,
                  backgroundColor: COLORS.accent,
                  opacity: 0.4,
                  width: `${underlineWidth * 100}%`,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
