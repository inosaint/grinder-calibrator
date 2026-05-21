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

export const TIMING = {
  fps: 30,

  // GrinderHook composition (9s) — rendered before demo footage
  introDuration: 75,   // 2.5s — "Introducing Grindsize.in"
  hookDuration: 90,    // 3s   — "Got a recipe for a C40 but you own a Timemore?"
  bridgeDuration: 90,  // 3s   — "With Grindsize.in, it's easy to find out."
  hookTotal: 255,

  // GrinderOutro composition (4s) — rendered after demo footage
  outroDuration: 120,  // 4s
} as const;
