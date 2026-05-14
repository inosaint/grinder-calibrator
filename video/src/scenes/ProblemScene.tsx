import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONTS } from "../constants";
import { GrainOverlay } from "../components/GrainOverlay";

export const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();

  const line1Opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const line1Y = interpolate(frame, [0, 20], [16, 0], { extrapolateRight: "clamp" });

  const line2Opacity = interpolate(frame, [25, 45], [0, 1], { extrapolateRight: "clamp" });
  const line2Y = interpolate(frame, [25, 45], [16, 0], { extrapolateRight: "clamp" });

  const lineStyle = (opacity: number, translateY: number): React.CSSProperties => ({
    fontFamily: FONTS.mono,
    fontSize: 28,
    color: COLORS.textPrimary,
    letterSpacing: "0.02em",
    opacity,
    transform: `translateY(${translateY}px)`,
    textAlign: "center",
    lineHeight: 1.5,
    maxWidth: 700,
    padding: "0 60px",
  });

  return (
    <div style={{
      width: "100%",
      height: "100%",
      background: `radial-gradient(ellipse at top, #1a1715 0%, #0a0807 60%, ${COLORS.bg} 100%)`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      gap: 24,
    }}>
      <GrainOverlay />

      <div style={lineStyle(line1Opacity, line1Y)}>
        Got a recipe for a <span style={{ color: COLORS.accentGold }}>C40</span>?
      </div>

      <div style={lineStyle(line2Opacity, line2Y)}>
        But you own a <span style={{ color: COLORS.accentTan }}>Timemore</span>?
      </div>
    </div>
  );
};
