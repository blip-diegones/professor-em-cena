/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#F59E0B',
          goldLight: '#FBBF24',
          goldDark: '#D97706',
          dark: '#080A0F',
          darkSurface: '#0E111A',
          card: '#121622',
          cardBorder: '#22283A',
          cardHover: '#181E2E',
          ruby: '#E11D48',
          rubyDark: '#9F1239',
          emerald: '#10B981',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif']
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(245, 158, 11, 0.35)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 35px rgba(245, 158, 11, 0.65)',
            transform: 'scale(1.015)',
          },
        }
      }
    },
  },
  plugins: [],
}

