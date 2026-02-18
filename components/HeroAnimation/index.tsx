"use client";

import { AbsoluteFill, useCurrentFrame } from "remotion";
import AmbientLayer from "./AmbientLayer";
import IncomingCall from "./IncomingCall";
import AIConversation from "./AIConversation";
import LeadCaptured from "./LeadCaptured";

// 300 frames at 30fps = 10 second loop
// Phase 1: Incoming Call    — frames 0–75   (0s–2.5s)
// Phase 2: AI Conversation  — frames 75–180 (2.5s–6s)
// Phase 3: Lead Captured    — frames 180–270 (6s–9s)
// Phase 4: Fade & Reset     — frames 270–300 (9s–10s)

export function HeroComposition() {
  const frame = useCurrentFrame();

  // Global fade out for Phase 4 (clean loop reset)
  const globalOpacity =
    frame > 270
      ? Math.max(0, 1 - (frame - 270) / 20)
      : frame < 8
        ? frame / 8
        : 1;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "transparent",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: globalOpacity,
        }}
      >
        <AmbientLayer />
        <IncomingCall />
        <AIConversation />
        <LeadCaptured />
      </div>
    </AbsoluteFill>
  );
}
