import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { COLORS, FONTS } from "../constants";
import { GrainOverlay } from "../components/GrainOverlay";
import { VideoBackground } from "../components/VideoBackground";

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "Just dial in." springs in
  const taglineY = spring({ frame, fps, config: { damping: 18, stiffness: 80 } });
  const taglineOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const taglineTranslate = interpolate(taglineY, [0, 1], [40, 0]);

  // Divider line
  const dividerOpacity = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: "clamp" });

  // "Try it free →"
  const ctaOpacity = interpolate(frame, [40, 58], [0, 1], { extrapolateRight: "clamp" });
  const ctaY = interpolate(frame, [40, 58], [16, 0], { extrapolateRight: "clamp" });


  return (
    <div style={{
      width: "100%",
      height: "100%",
      background: "#050403",
      position: "relative",
    }}>
      <VideoBackground src="bg3.mp4" blur={22} overlayOpacity={0.72} />

      <div style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
        padding: "0 72px",
        boxSizing: "border-box",
      }}>
        {/* "Just dial in." */}
        <div style={{
          fontFamily: FONTS.serif,
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: 80,
          color: COLORS.textBright,
          opacity: taglineOpacity,
          transform: `translateY(${taglineTranslate}px)`,
          marginBottom: 52,
          textAlign: "center",
        }}>
          Just dial in.
        </div>

        {/* Divider */}
        <div style={{
          width: 36,
          height: 1,
          background: COLORS.accentGold,
          opacity: dividerOpacity * 0.45,
          marginBottom: 32,
        }} />

        {/* "Try it for free at grindsize.in" */}
        <div style={{
          fontFamily: FONTS.mono,
          fontSize: 36,
          color: COLORS.textPrimary,
          letterSpacing: "0.03em",
          opacity: ctaOpacity,
          transform: `translateY(${ctaY}px)`,
          textAlign: "center",
          lineHeight: 1.4,
        }}>
          Try it for free at{" "}
          <span style={{ color: COLORS.accentGold, fontWeight: 500 }}>grindsize.in</span>
        </div>
      </div>

      <GrainOverlay />
    </div>
  );
};
