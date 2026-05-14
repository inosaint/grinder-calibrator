import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONTS } from "../constants";
import { GrainOverlay } from "../components/GrainOverlay";

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();

  // "Just dial in." fades in first
  const taglineOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const taglineY = interpolate(frame, [0, 20], [12, 0], { extrapolateRight: "clamp" });

  // Domain block fades in after
  const domainLabelOpacity = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: "clamp" });
  const domainOpacity = interpolate(frame, [40, 60], [0, 1], { extrapolateRight: "clamp" });
  const domainY = interpolate(frame, [40, 60], [10, 0], { extrapolateRight: "clamp" });

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
      gap: 0,
    }}>
      <GrainOverlay />

      {/* "Just dial in." */}
      <div style={{
        fontFamily: FONTS.serif,
        fontStyle: "italic",
        fontWeight: 400,
        fontSize: 64,
        color: COLORS.textBright,
        opacity: taglineOpacity,
        transform: `translateY(${taglineY}px)`,
        marginBottom: 56,
      }}>
        Just dial in.
      </div>

      {/* Divider */}
      <div style={{
        width: 32,
        height: 1,
        background: COLORS.accentGold,
        opacity: domainLabelOpacity * 0.4,
        marginBottom: 24,
      }} />

      {/* "use the free calibrator at" */}
      <div style={{
        fontFamily: FONTS.mono,
        fontSize: 13,
        color: COLORS.textDim,
        letterSpacing: "0.08em",
        opacity: domainLabelOpacity,
        marginBottom: 8,
      }}>
        use the free calibrator at
      </div>

      {/* "grindsize.in" */}
      <div style={{
        fontFamily: FONTS.mono,
        fontSize: 36,
        fontWeight: 500,
        color: COLORS.accentGold,
        letterSpacing: "0.06em",
        opacity: domainOpacity,
        transform: `translateY(${domainY}px)`,
      }}>
        grindsize.in
      </div>
    </div>
  );
};
