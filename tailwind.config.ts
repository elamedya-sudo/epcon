import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a2d8f',
          dark: '#111f6a',
          deeper: '#0c1545',
        },
        pest: {
          green: '#1a9e3f',
          'green-dark': '#137a30',
          'green-light': '#e8f7ed',
        },
        text: {
          dark: '#0e1530',
          mid: '#3a4060',
          muted: '#7a82a8',
        },
        border: '#e2e6f0',
      },
      fontFamily: {
        barlow: ['var(--font-barlow)', 'sans-serif'],
        barlowCondensed: ['var(--font-barlow-condensed)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;