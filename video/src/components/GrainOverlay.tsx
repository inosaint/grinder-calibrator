import React from "react";
import { useCurrentFrame } from "remotion";

export const GrainOverlay: React.FC = () => {
  const frame = useCurrentFrame();
  // Shift seed each frame so grain animates (film-like)
  const seed = frame % 60;

  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity: 0.045,
        mixBlendMode: "screen",
      }}
    >
      <filter id={`grain-${seed}`}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.75"
          numOctaves="4"
          seed={seed}
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect
        width="100%"
        height="100%"
        filter={`url(#grain-${seed})`}
      />
    </svg>
  );
};
