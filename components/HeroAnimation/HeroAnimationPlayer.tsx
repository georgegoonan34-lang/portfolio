"use client";

import { Player } from "@remotion/player";
import { HeroComposition } from "./index";

export default function HeroAnimationPlayer() {
  return (
    <Player
      component={HeroComposition}
      durationInFrames={300}
      fps={30}
      compositionWidth={600}
      compositionHeight={480}
      style={{
        width: "100%",
        height: "auto",
        aspectRatio: "600 / 480",
      }}
      autoPlay
      loop
    />
  );
}
