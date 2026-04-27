import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blyaner: {
          purple: '#8B7EC8',
          purpleDark: '#6A5AAB',
          purpleDeep: '#3B2D71',
          lime: '#D4E84D',
          dark: '#2D2B3D',
          bg: '#F4F3F8',
          cardLight: '#F2EFFF',
          cardPink: '#FCE7F3'
        }
      }
    },
  },
  plugins: [],
};
export default config;
