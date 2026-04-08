import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      colors: {
        bg: "#0e0e0c",
        "bg-2": "#141412",
        "bg-3": "#1c1c1a",
        text: "#e8e4d9",
        muted: "#8a8778",
        accent: "#c8b57a",
      },
    },
  },
  plugins: [],
};

export default config;
