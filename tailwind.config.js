/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        display: ['Archivo Black', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
        mono:    ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        paper:   '#FAF9F7',
        surface: '#F0EDE6',
        ink:     '#0F0F0D',
        mid:     '#3A3A36',
        muted:   '#8C8C83',
        rule:    '#E0DDD6',
        orange:  '#FF4D00',
        yellow:  '#F5E142',
        blue:    '#0057FF',
      },
    },
  },
  plugins: [],
}
