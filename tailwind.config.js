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
        fluid: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        fluid: 'fluid 6s linear infinite',
      },
    },
  },
  plugins: [],
}

