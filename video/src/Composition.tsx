import React from "react";
import { Series } from "remotion";
import { TIMING } from "./constants";
import { TitleScene } from "./scenes/TitleScene";
import { ProblemScene } from "./scenes/ProblemScene";
import { DialScene } from "./scenes/DialScene";
import { OutroScene } from "./scenes/OutroScene";

export const GrinderIntro: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={TIMING.titleDuration}>
        <TitleScene />
      </Series.Sequence>

      <Series.Sequence durationInFrames={TIMING.problemDuration}>
        <ProblemScene />
      </Series.Sequence>

      <Series.Sequence durationInFrames={TIMING.dialDuration}>
        <DialScene />
      </Series.Sequence>

      <Series.Sequence durationInFrames={TIMING.solveDuration + TIMING.domainDuration}>
        <OutroScene />
      </Series.Sequence>
    </Series>
  );
};
