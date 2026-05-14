import React from "react";
import { COLORS, FONTS } from "../constants";

interface DialProps {
  /** Current rotation in degrees (driven by animation) */
  rotation: number;
  /** Accent colour for the range arc and active tick */
  accentColor: string;
  /** Click count shown in hub */
  clickCount: number;
  /** Label shown below click count ("Source" | "Mapped") */
  label: string;
  /** Grinder name shown above dial */
  name: string;
  /** Model shown above dial (smaller) */
  model: string;
  /** Diameter in px */
  size?: number;
  /** Show the method range arc */
  showArc?: boolean;
  /** Arc start angle in degrees (0 = top) */
  arcStart?: number;
  /** Arc end angle in degrees */
  arcEnd?: number;
}

const toRad = (deg: number) => (deg * Math.PI) / 180;

function arcPath(cx: number, cy: number, r: number, startDeg: number, endDeg: number) {
  const start = toRad(startDeg - 90);
  const end = toRad(endDeg - 90);
  const x1 = cx + r * Math.cos(start);
  const y1 = cy + r * Math.sin(start);
  const x2 = cx + r * Math.cos(end);
  const y2 = cy + r * Math.sin(end);
  const largeArc = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`;
}

export const Dial: React.FC<DialProps> = ({
  rotation,
  accentColor,
  clickCount,
  label,
  name,
  model,
  size = 280,
  showArc = true,
  arcStart = 30,
  arcEnd = 180,
}) => {
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size / 2 - 4;
  const knurlR = outerR - 14;
  const hubR = size * 0.22;
  const tickCount = 60;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
      {/* Grinder name */}
      <div style={{ textAlign: "center" }}>
        <div style={{
          fontFamily: FONTS.mono,
          fontSize: 13,
          color: COLORS.textBright,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}>
          {name}
        </div>
        <div style={{
          fontFamily: FONTS.mono,
          fontSize: 11,
          color: COLORS.textDim,
          letterSpacing: "0.06em",
        }}>
          {model}
        </div>
      </div>

      {/* Badge */}
      <div style={{
        fontFamily: FONTS.mono,
        fontSize: 10,
        color: accentColor,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        border: `1px solid ${accentColor}44`,
        borderRadius: 3,
        padding: "2px 8px",
      }}>
        {label}
      </div>

      {/* SVG dial */}
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <radialGradient id={`bezel-${label}`} cx="30%" cy="25%" r="80%">
            <stop offset="0%" stopColor="#2a2724" />
            <stop offset="100%" stopColor="#0a0908" />
          </radialGradient>
          <filter id={`glow-${label}`}>
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer bezel */}
        <circle cx={cx} cy={cy} r={outerR} fill={`url(#bezel-${label})`} stroke="#2a2724" strokeWidth="1.5" />

        {/* Range arc */}
        {showArc && (
          <path
            d={arcPath(cx, cy, outerR - 6, arcStart, arcEnd)}
            fill="none"
            stroke={accentColor}
            strokeWidth="3"
            strokeLinecap="round"
            opacity={0.7}
            filter={`url(#glow-${label})`}
          />
        )}

        {/* Rotating knurl group */}
        <g transform={`rotate(${rotation}, ${cx}, ${cy})`}>
          {/* Knurl ring */}
          <circle cx={cx} cy={cy} r={knurlR} fill="none" stroke="#1e1c1a" strokeWidth="10" />
          {/* Tick marks on knurl */}
          {Array.from({ length: tickCount }).map((_, i) => {
            const angle = (i / tickCount) * 360 - 90;
            const rad = toRad(angle);
            const inner = knurlR - 5;
            const outer = knurlR + 5;
            const x1 = cx + inner * Math.cos(rad);
            const y1 = cy + inner * Math.sin(rad);
            const x2 = cx + outer * Math.cos(rad);
            const y2 = cy + outer * Math.sin(rad);
            return (
              <line
                key={i}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#3a3530"
                strokeWidth={i % 5 === 0 ? 1.5 : 0.8}
              />
            );
          })}
        </g>

        {/* Major tick marks (static, outer ring) */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * 360 - 90;
          const rad = toRad(angle);
          const r1 = outerR - 10;
          const r2 = outerR - 20;
          return (
            <line
              key={i}
              x1={cx + r1 * Math.cos(rad)}
              y1={cy + r1 * Math.sin(rad)}
              x2={cx + r2 * Math.cos(rad)}
              y2={cy + r2 * Math.sin(rad)}
              stroke="#4a4540"
              strokeWidth="1.5"
            />
          );
        })}

        {/* Hub */}
        <circle cx={cx} cy={cy} r={hubR} fill="#0a0807" stroke="#1e1c1a" strokeWidth="1" />
        <circle cx={cx} cy={cy} r={hubR - 4} fill="none" stroke="#2a2724" strokeWidth="0.5" />

        {/* Click count */}
        <text
          x={cx}
          y={cy + 8}
          textAnchor="middle"
          fontFamily="DM Mono, monospace"
          fontSize={hubR * 0.75}
          fontWeight="500"
          fill={COLORS.textBright}
        >
          {clickCount}
        </text>

        {/* "clicks" label */}
        <text
          x={cx}
          y={cy + hubR * 0.55}
          textAnchor="middle"
          fontFamily="DM Mono, monospace"
          fontSize="9"
          fill={COLORS.textDim}
          letterSpacing="1"
        >
          CLICKS
        </text>
      </svg>
    </div>
  );
};
