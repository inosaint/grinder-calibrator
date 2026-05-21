import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONTS } from "../constants";
import { GrainOverlay } from "../components/GrainOverlay";
import { VideoBackground } from "../components/VideoBackground";

export const HookScene: React.FC = () => {
  const frame = useCurrentFrame();

  const line1Opacity = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const line1Y = interpolate(frame, [0, 18], [20, 0], { extrapolateRight: "clamp" });

  const line2Opacity = interpolate(frame, [22, 40], [0, 1], { extrapolateRight: "clamp" });
  const line2Y = interpolate(frame, [22, 40], [20, 0], { extrapolateRight: "clamp" });

  return (
    <div style={{
      width: "100%",
      height: "100%",
      background: "#050403",
      position: "relative",
    }}>
      <VideoBackground src="bg1.mp4" blur={20} overlayOpacity={0.68} />

      <div style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
        padding: "0 72px",
        boxSizing: "border-box",
      }}>
        <div style={{
          fontFamily: FONTS.mono,
          fontSize: 52,
          lineHeight: 1.3,
          color: COLORS.textBright,
          textAlign: "center",
          opacity: line1Opacity,
          transform: `translateY(${line1Y}px)`,
        }}>
          Got a recipe for a{" "}
          <span style={{ color: COLORS.accentGold }}>C40</span>?
        </div>

        <div style={{
          fontFamily: FONTS.mono,
          fontSize: 52,
          lineHeight: 1.3,
          color: COLORS.textBright,
          textAlign: "center",
          opacity: line2Opacity,
          transform: `translateY(${line2Y}px)`,
        }}>
          But you own a{" "}
          <span style={{ color: COLORS.accentTan }}>Timemore</span>?
        </div>
      </div>

      <GrainOverlay />
    </div>
  );
};
