// Palette lives as CSS custom properties in index.css (so dark mode is a
// single attribute toggle, not a second copy of every color). Components
// just reference these var() strings in their inline styles.
export const C = {
  bg: "var(--bg)",
  ink: "var(--ink)",
  soft: "var(--soft)",
  rule: "var(--rule)",
  accent: "var(--accent)",
  accentAlt: "var(--accent-alt)",
  accentMuted: "var(--accent-muted)",
  card: "var(--card)",
};
