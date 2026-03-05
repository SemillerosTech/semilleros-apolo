import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        main: "var(--main)",
        secondary: "var(--secondary)",
        trazaurusBlue: "var(--tzBlue)",
        trazaurusPurpple: "var(--tzPurpple)",
        trazaurusOrange: "var(--tzOrange)",
      },
      fontFamily: {
        seed: "Antitype",
      },
      keyframes: {
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        heartbeat: "heartbeat 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
