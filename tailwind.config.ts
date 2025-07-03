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
    },
  },
  plugins: [],
} satisfies Config;
