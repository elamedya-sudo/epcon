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
          DEFAULT: '#0B2341', // Brif: Kurumsal Lacivert
          dark: '#071629',
          deeper: '#040d1a',
        },
        pest: {
          green: '#5CB746', // Brif: Kurumsal Yeşil (CTA)
          'green-dark': '#4a9238',
          'green-light': '#eaf6e5', // Brif: Açık yeşil bilgi alanı
        },
        surface: {
          light: '#f3f5f7', // Brif: Açık gri arka plan
        },
        text: {
          dark: '#1a202c',
          mid: '#4a5568', // Brif: 16-19px gövde metni kontrastı
          muted: '#718096',
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