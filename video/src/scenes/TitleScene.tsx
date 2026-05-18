import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { COLORS, FONTS } from "../constants";
import { GrainOverlay } from "../components/GrainOverlay";
import { VideoBackground } from "../components/VideoBackground";

export const TitleScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const subtitleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  const titleY = spring({ frame: frame - 15, fps, config: { damping: 18, stiffness: 80 } });
  const titleOpacity = interpolate(frame, [15, 35], [0, 1], { extrapolateRight: "clamp" });
  const titleTranslate = interpolate(titleY, [0, 1], [40, 0]);

  const lineOpacity = interpolate(frame, [45, 65], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div style={{
      width: "100%",
      height: "100%",
      background: "#050403",
      position: "relative",
    }}>
      <VideoBackground startFrom={0} />

      <div style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
      }}>
        {/* Thin decorative line above */}
        <div style={{
          width: 40,
          height: 1,
          background: COLORS.accentGold,
          opacity: lineOpacity * 0.5,
          marginBottom: 20,
        }} />

        {/* "COFFEE GRIND SIZE" */}
        <div style={{
          fontFamily: FONTS.mono,
          fontSize: 18,
          color: COLORS.textPrimary,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          opacity: subtitleOpacity,
        }}>
          Coffee Grind Size
        </div>

        {/* "Calibrator" */}
        <div style={{
          fontFamily: FONTS.serif,
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: 82,
          color: COLORS.textBright,
          lineHeight: 1,
          opacity: titleOpacity,
          transform: `translateY(${titleTranslate}px)`,
        }}>
          Calibrator
        </div>

        {/* Thin decorative line below */}
        <div style={{
          width: 40,
          height: 1,
          background: COLORS.accentGold,
          opacity: lineOpacity * 0.5,
          marginTop: 20,
        }} />
      </div>

      <GrainOverlay />
    </div>
  );
};
