import { interpolate, spring } from "remotion";

// Standard clamped interpolation
export function fade(
  frame: number,
  inStart: number,
  inEnd: number,
  outStart?: number,
  outEnd?: number
): number {
  if (outStart !== undefined && outEnd !== undefined) {
    return interpolate(
      frame,
      [inStart, inEnd, outStart, outEnd],
      [0, 1, 1, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
  }
  return interpolate(frame, [inStart, inEnd], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

// Slide up with fade
export function slideUp(frame: number, start: number, distance = 12) {
  const progress = fade(frame, start, start + 12);
  return {
    opacity: progress,
    translateY: interpolate(progress, [0, 1], [distance, 0]),
  };
}

// Scale in (0.96 → 1.0)
export function scaleIn(frame: number, start: number) {
  const progress = fade(frame, start, start + 15);
  return {
    opacity: progress,
    scale: interpolate(progress, [0, 1], [0.96, 1]),
  };
}

// Organic spring for snappy movements
export function snap(frame: number, startFrame: number, fps: number) {
  return spring({
    frame: frame - startFrame,
    fps,
    config: { damping: 18, stiffness: 90, mass: 0.8 },
  });
}

// Softer spring for larger transitions
export function soft(frame: number, startFrame: number, fps: number) {
  return spring({
    frame: frame - startFrame,
    fps,
    config: { damping: 22, stiffness: 60, mass: 1 },
  });
}
