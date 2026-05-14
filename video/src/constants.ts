export const COLORS = {
  bg: "#050403",
  bgSecondary: "#0a0807",
  bgTertiary: "#14110f",
  textPrimary: "#a8a098",
  textBright: "#d4ccc0",
  textDim: "#6a625a",
  accentGold: "#c89d6a",
  accentTan: "#b89a7c",
} as const;

export const FONTS = {
  mono: "'DM Mono', monospace",
  serif: "'Bodoni Moda', Georgia, serif",
} as const;

// Frame timing (30fps, 450 total frames = 15s)
export const TIMING = {
  fps: 30,
  totalFrames: 450,
  titleStart: 0,
  titleDuration: 90,    // 0–90   (3s)
  problemStart: 90,
  problemDuration: 105, // 90–195 (3.5s)
  dialStart: 195,
  dialDuration: 165,    // 195–360 (5.5s)
  solveStart: 360,
  solveDuration: 60,    // 360–420 (2s)
  domainStart: 420,
  domainDuration: 30,   // 420–450 (1s)
} as const;
