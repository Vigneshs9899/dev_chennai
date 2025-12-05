/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: "#e77e23",
        softWhite: "#F8F9FA",
        haze:"#e9ecec",
        graphite: "#1E1E1E",
        foxDark: "#141414",     // optional darker background
        foxMuted: "#B8B8B8",    // optional muted text
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
