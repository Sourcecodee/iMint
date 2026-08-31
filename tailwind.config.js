/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'display': ['Instrument Serif', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          900: '#0f0f0f',
          800: '#1a1a1a',
          700: '#2a2a2a',
        },
        paper: {
          50: '#fcfcf9',
          100: '#f5f5f2',
          200: '#e8e8e3',
        }
      }
    },
  },
  plugins: [],
}
