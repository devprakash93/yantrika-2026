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
        display: ['Playfair Display', 'serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'site-bg':      '#0A0A0A',
        'site-surface': '#141414',
        'site-border':  '#1E1E1E',
        'site-ink':     '#F0EDE6',
        'site-muted':   '#A0A09A',
        'site-dim':     '#606060',
        'site-gold':    '#C8A96A',
        'site-gold-lt': '#D4B87A',
      },
    },
  },
  plugins: [],
}
