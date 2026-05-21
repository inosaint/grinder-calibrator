import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { COLORS, FONTS } from "../constants";
import { GrainOverlay } from "../components/GrainOverlay";
import { VideoBackground } from "../components/VideoBackground";

export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const labelOpacity = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const labelY = interpolate(frame, [0, 18], [12, 0], { extrapolateRight: "clamp" });

  const nameY = spring({ frame: frame - 12, fps, config: { damping: 18, stiffness: 80 } });
  const nameOpacity = interpolate(frame, [12, 32], [0, 1], { extrapolateRight: "clamp" });
  const nameTranslate = interpolate(nameY, [0, 1], [36, 0]);

  return (
    <div style={{
      width: "100%",
      height: "100%",
      background: "#050403",
      position: "relative",
    }}>
      <VideoBackground src="bg2.mp4" blur={20} overlayOpacity={0.70} />

      <div style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        padding: "0 72px",
        boxSizing: "border-box",
      }}>
        {/* "Introducing" */}
        <div style={{
          fontFamily: FONTS.mono,
          fontSize: 28,
          color: COLORS.textPrimary,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          opacity: labelOpacity,
          transform: `translateY(${labelY}px)`,
        }}>
          Introducing
        </div>

        {/* "Grindsize.in" */}
        <div style={{
          fontFamily: FONTS.serif,
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: 80,
          color: COLORS.accentGold,
          lineHeight: 1,
          opacity: nameOpacity,
          transform: `translateY(${nameTranslate}px)`,
          textAlign: "center",
        }}>
          Grindsize.in
        </div>
      </div>

      <GrainOverlay />
    </div>
  );
};
