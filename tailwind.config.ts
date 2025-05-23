import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        main: "var(--main)",
        secondary: "var(--secondary)",
      },
      fontFamily: {
        seed: "Antitype",
      },
    },
  },
  plugins: [],
} satisfies Config;
