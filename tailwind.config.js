/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        notoSans: ['Noto Sans JP','sans-serif'],
        notoSerif: ['Noto Serif JP','sans-serif'],
        pacifico: ['Pacifico','sans-serif'],
      },
      keyframes: {
        gradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 5s infinite cubic-bezier(.62, .28, .23, .99) both',
      },
      height: {
        '112': '28rem',
      },
    },
  },
  plugins: [],
}

