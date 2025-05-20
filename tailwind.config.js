import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zinc: colors.zinc,
        pink: colors.pink,
        fuchsia: colors.fuchsia,
        gray: colors.gray,
        slate: colors.slate,
        neutral: colors.neutral,
        stone: colors.stone,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
      },
    },
  },
  plugins: [],
}