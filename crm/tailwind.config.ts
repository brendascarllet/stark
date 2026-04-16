import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#B8960C",
          50: "#FBF4D6",
          100: "#F6EAAE",
          200: "#EED75E",
          300: "#E5C321",
          400: "#D1AD13",
          500: "#B8960C",
          600: "#8F750A",
          700: "#665307",
          800: "#3D3204",
          900: "#141002",
        },
        ink: {
          900: "#0A0B0D",
          800: "#0F1114",
          700: "#15181C",
          600: "#1C2026",
          500: "#252A31",
          400: "#343B44",
          300: "#4A525D",
        },
      },
      fontFamily: {
        display: ["'Bebas Neue'", "Impact", "system-ui", "sans-serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(184,150,12,0.35), 0 8px 24px -8px rgba(184,150,12,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
