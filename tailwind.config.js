/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A',
          light: '#2563EB',
          dark: '#1E40AF',
        },
        secondary: {
          DEFAULT: '#FBBF24',
          light: '#FCD34D',
          dark: '#F59E0B',
        },
        neutral: {
          background: '#F3F4F6',
        },
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      fontSize: {
        'h1': ['1.5rem', { lineHeight: '2rem' }],
        'h2': ['1.25rem', { lineHeight: '1.75rem' }],
        'h3': ['1.125rem', { lineHeight: '1.5rem' }],
      },
    },
  },
  plugins: [],
}