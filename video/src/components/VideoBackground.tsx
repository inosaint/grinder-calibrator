import React from "react";
import { Video, staticFile } from "remotion";

interface VideoBackgroundProps {
  src?: string;
  blur?: number;
  overlayOpacity?: number;
  startFrom?: number;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({
  src = "background1.MOV",
  blur = 18,
  overlayOpacity = 0.72,
  startFrom = 0,
}) => {
  return (
    <>
      {/*
        Outer div clips to frame bounds.
        Inner div expands beyond the clip to prevent blur from sampling
        transparent edges — then the Video fills it via objectFit: cover.
      */}
      <div style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          inset: -(blur * 2),
          filter: `blur(${blur}px)`,
        }}>
          <Video
            src={staticFile(src)}
            startFrom={startFrom}
            loop
            muted
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {/* Dark overlay — keeps earthy palette and ensures text readability */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `rgba(5, 4, 3, ${overlayOpacity})`,
      }} />
    </>
  );
};
