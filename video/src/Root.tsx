import React from "react";
import { Composition } from "remotion";
import { GrinderIntro } from "./Composition";
import { loadFont as loadDMMono } from "@remotion/google-fonts/DMMono";
import { loadFont as loadBodoniModa } from "@remotion/google-fonts/BodoniModa";
import { TIMING } from "./constants";

loadDMMono();
loadBodoniModa();

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="GrinderIntro"
        component={GrinderIntro}
        durationInFrames={TIMING.totalFrames}
        fps={TIMING.fps}
        width={1080}
        height={1920}
      />
    </>
  );
};
