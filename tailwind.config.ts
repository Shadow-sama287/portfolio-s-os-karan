import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'Space Mono'", "monospace"],
        sans: ["'Inter'", "sans-serif"],
      },
      colors: {
        pixel: {
          black: "#0a0a0a",
          darker: "#111111",
          dark: "#1a1a1a",
          mid: "#2a2a2a",
          border: "#333333",
          muted: "#555555",
          subtle: "#888888",
          light: "#bbbbbb",
          bright: "#e8e8e8",
          white: "#f5f5f5",
        },
      },
      animation: {
        "pixel-blink": "pixelBlink 1s step-end infinite",
        "scanline": "scanline 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glitch": "glitch 3s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "pixel-in": "pixelIn 0.5s steps(8) forwards",
      },
      keyframes: {
        pixelBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glitch: {
          "0%, 90%, 100%": { transform: "translateX(0)" },
          "91%": { transform: "translateX(-2px)" },
          "93%": { transform: "translateX(2px)" },
          "95%": { transform: "translateX(-1px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pixelIn: {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      boxShadow: {
        pixel: "4px 4px 0px 0px #333",
        "pixel-sm": "2px 2px 0px 0px #333",
        "pixel-light": "4px 4px 0px 0px #ccc",
        "pixel-sm-light": "2px 2px 0px 0px #ccc",
      },
    },
  },
  plugins: [],
};

export default config;
