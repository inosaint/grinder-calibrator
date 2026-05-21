import React from "react";
import { Series } from "remotion";
import { TIMING } from "./constants";
import { IntroScene } from "./scenes/IntroScene";
import { HookScene } from "./scenes/HookScene";
import { BridgeScene } from "./scenes/BridgeScene";

// Rendered before the demo footage: hook + brand intro + CTA tease
export const GrinderHook: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={TIMING.hookDuration}>
        <HookScene />
      </Series.Sequence>
      <Series.Sequence durationInFrames={TIMING.introDuration}>
        <IntroScene />
      </Series.Sequence>
      <Series.Sequence durationInFrames={TIMING.bridgeDuration}>
        <BridgeScene />
      </Series.Sequence>
    </Series>
  );
};
