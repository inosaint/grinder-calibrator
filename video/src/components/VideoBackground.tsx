import React from "react";
import { Video, staticFile } from "remotion";

interface VideoBackgroundProps {
  src?: string;
  blur?: number;
  overlayOpacity?: number;
  startFrom?: number;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({
  src = staticFile("background.mp4"),
  blur = 18,
  overlayOpacity = 0.72,
  startFrom = 0,
}) => {
  return (
    <>
      {/* Video layer — clipped to prevent blur edge fringing */}
      <div style={{
        position: "absolute",
        inset: -blur * 2,
        overflow: "hidden",
      }}>
        <Video
          src={src}
          startFrom={startFrom}
          loop
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: `blur(${blur}px)`,
          }}
        />
      </div>

      {/* Dark overlay — preserves the earthy dark palette for readability */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `rgba(5, 4, 3, ${overlayOpacity})`,
      }} />
    </>
  );
};
