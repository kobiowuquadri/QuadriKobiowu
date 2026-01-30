/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary-bg': '#050505',
        'secondary-bg': '#111111',
        'accent': '#E6D5B8',
        'primary-text': '#E6D5B8',
        'secondary-text': '#9CA3AF',
        'border-color': '#222222',
      },
    },
  },
  plugins: [],
}