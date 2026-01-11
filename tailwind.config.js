/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cyberpunk Palette
        primary: {
          DEFAULT: '#00F0FF', // Neon Cyan
          light: '#5FFFFF',
          dark: '#00B8CC'
        },
        secondary: {
          DEFAULT: '#FF003C', // Neon Magenta/Red
          light: '#FF4D70',
          dark: '#CC0030'
        },
        accent: {
          DEFAULT: '#B026FF', // Electric Purple
          light: '#D46BFF',
          dark: '#8A00D4'
        },
        surface: {
          0: '#000000',
          50: '#0A0A0F', // Very dark blue/black
          100: '#12121A',
          200: '#1E1E2A',
          300: '#2D2D3E',
          400: '#3C3C52',
          500: '#4B4B66',
          600: '#5A5A7A',
          700: '#69698E',
          800: '#7878A2',
          900: '#8787B6'
        }
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'],
        sans: ['"Orbitron"', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}
