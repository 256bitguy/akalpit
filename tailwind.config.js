/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Menlo', 'monospace'],
        cursive: ['Comic Sans MS', 'cursive'],
        fantasy: ['Impact', 'fantasy'],
      },
      lineHeight: {
        tight: '1.1',
        snug: '1.3',
        normal: '1.5',
        relaxed: '1.7',
        loose: '2',
      },
      letterSpacing: {
        tight: '-0.02em',
        normal: '0',
        wide: '0.2em',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}