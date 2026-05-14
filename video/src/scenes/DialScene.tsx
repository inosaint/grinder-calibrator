import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { COLORS, FONTS } from "../constants";
import { GrainOverlay } from "../components/GrainOverlay";
import { Dial } from "../components/Dial";

// C40: 30 µm/click. Timemore C2: ~35 µm/click (HCG back-fit).
// V60 target: ~15 clicks on C40 = 450 µm → C2 ≈ 450/35 ≈ 13 clicks
const TARGET_C40 = 15;
const TARGET_C2 = 13;

// Degrees per click (full 360° ÷ ~30 major clicks visible)
const DEG_PER_CLICK = 12;

export const DialScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scene fade-in
  const sceneOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  // Badge fade in early
  const badgeOpacity = interpolate(frame, [10, 30], [0, 1], { extrapolateRight: "clamp" });

  // Left dial: starts animating at frame 20
  const leftProgress = spring({ frame: frame - 20, fps, config: { damping: 22, stiffness: 40 } });
  const leftClicks = Math.round(interpolate(leftProgress, [0, 1], [0, TARGET_C40]));
  const leftRotation = leftProgress * TARGET_C40 * DEG_PER_CLICK;

  // Right dial: starts animating at frame 50 (follows left with delay)
  const rightProgress = spring({ frame: frame - 50, fps, config: { damping: 22, stiffness: 40 } });
  const rightClicks = Math.round(interpolate(rightProgress, [0, 1], [0, TARGET_C2]));
  const rightRotation = rightProgress * TARGET_C2 * DEG_PER_CLICK;

  // Connector line between dials
  const connectorOpacity = interpolate(frame, [40, 60], [0, 1], { extrapolateRight: "clamp" });

  // Micron readout
  const microns = Math.round(leftClicks * 30);

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
      opacity: sceneOpacity,
    }}>
      <GrainOverlay />

      {/* Method badge */}
      <div style={{
        fontFamily: FONTS.mono,
        fontSize: 11,
        color: COLORS.accentGold,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        border: `1px solid ${COLORS.accentGold}55`,
        borderRadius: 3,
        padding: "4px 14px",
        marginBottom: 36,
        opacity: badgeOpacity,
        background: `${COLORS.accentGold}0d`,
      }}>
        V60
      </div>

      {/* Dials row */}
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 0,
      }}>
        <Dial
          rotation={leftRotation}
          accentColor={COLORS.accentGold}
          clickCount={leftClicks}
          label="Source"
          name="Comandante"
          model="C40"
          size={260}
          arcStart={36}
          arcEnd={216}
        />

        {/* Connector */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 16px",
          gap: 4,
          opacity: connectorOpacity,
          marginTop: 40,
        }}>
          <div style={{
            width: 32,
            height: 1,
            background: `linear-gradient(90deg, ${COLORS.accentGold}44, ${COLORS.accentTan}44)`,
          }} />
          <div style={{
            fontFamily: FONTS.mono,
            fontSize: 9,
            color: COLORS.textDim,
            letterSpacing: "0.1em",
          }}>
            {microns > 0 ? `≈${microns}µm` : ""}
          </div>
        </div>

        <Dial
          rotation={rightRotation}
          accentColor={COLORS.accentTan}
          clickCount={rightClicks}
          label="Mapped"
          name="Timemore"
          model="C2"
          size={260}
          arcStart={36}
          arcEnd={216}
        />
      </div>

      {/* Caption */}
      <div style={{
        fontFamily: FONTS.mono,
        fontSize: 13,
        color: COLORS.textDim,
        letterSpacing: "0.06em",
        marginTop: 40,
        opacity: connectorOpacity,
      }}>
        same grind · different grinder
      </div>
    </div>
  );
};
