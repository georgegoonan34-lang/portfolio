import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "InvoxAI — AI phone answering for trade businesses in the UK";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0a0a 0%, #141414 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", fontSize: 48 }}>
          <span style={{ color: "#e8e4dd" }}>invox</span>
          <span style={{ color: "#D4A853" }}>AI</span>
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#e8e4dd",
            maxWidth: 900,
          }}
        >
          AI phone answering for trade businesses
        </div>

        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            color: "#9a9690",
            maxWidth: 700,
          }}
        >
          Voice and chat agents that answer calls, qualify leads, and book jobs
          — 24/7. Built for tradespeople across the UK.
        </div>

        <div
          style={{
            marginTop: 48,
            width: 80,
            height: 4,
            background: "#D4A853",
            borderRadius: 2,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
