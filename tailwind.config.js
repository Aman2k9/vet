// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           DEFAULT: '#1D4E89', // Ocean Blue
//           light: '#3A73C6',
//           dark: '#123766',
//         },
//         secondary: {
//           DEFAULT: '#78D5A3', // Mint Green
//           light: '#A9E8C5',
//           dark: '#57B282',
//         },
//         neutral: {
//           background: '#F2F2F2', // Soft Gray for backgrounds
//         },
//         accent: {
//           orange: {
//             DEFAULT: '#F26A3C', // Sunset Orange
//             light: '#F89C71',
//             dark: '#DB5630',
//           },
//           pink: {
//             DEFAULT: '#F78DA7', // Coral Pink
//             light: '#FABDC7',
//             dark: '#D36B88',
//           },
//           yellow: {
//             DEFAULT: '#FEC601', // Golden Yellow
//             light: '#FFDA48',
//             dark: '#E5AD00',
//           },
//           teal: {
//             DEFAULT: '#128C7E', // Teal
//             light: '#36A497',
//             dark: '#0E6C60',
//           },
//           lavender: {
//             DEFAULT: '#E0BBE4', // Light Lavender
//             light: '#EDD1EC',
//             dark: '#C19AC4',
//           },
//           charcoal: {
//             DEFAULT: '#333333', // Charcoal for text or headings
//           },
//         },
//       },
//       fontFamily: {
//         sans: ['Arial', 'sans-serif'],
//         serif: ['Georgia', 'serif'],
//       },
//       fontSize: {
//         'h1': ['1.75rem', { lineHeight: '2.25rem' }], // Updated for larger headings
//         'h2': ['1.5rem', { lineHeight: '2rem' }],
//         'h3': ['1.25rem', { lineHeight: '1.75rem' }],
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern Primary Colors
        primary: {
          DEFAULT: '#00B4D8', // Fresh Cyan
          light: '#90E0EF',   // Light Cyan
          dark: '#0077B6',    // Dark Cyan for buttons and links
        },
        secondary: {
          DEFAULT: '#34D399', // Vibrant Green
          light: '#6EE7B7',   // Light Green
          dark: '#059669',    // Darker Green for hover states
        },
        // Neutral Backgrounds and Subtle Shades
        neutral: {
          light: '#F9FAFB',   // Very Light Gray for background
          DEFAULT: '#E5E7EB', // Light Gray for cards or containers
          dark: '#6B7280',    // Gray for text or disabled components
          background: '#F2F2F2'
        },
        // Accent Colors to Add Vibrancy
        accent: {
          pink: {
            DEFAULT: '#EC4899', // Hot Pink
            light: '#F472B6',   // Soft Pink for accents
            dark: '#BE185D',    // Dark Pink for interactive elements
          },
          yellow: {
            DEFAULT: '#FBBF24', // Warm Yellow
            light: '#FDE68A',   // Soft Yellow
            dark: '#B45309',    // Dark Yellow for text or icons
          },
          purple: {
            DEFAULT: '#8B5CF6', // Vibrant Purple
            light: '#C4B5FD',   // Light Purple
            dark: '#6D28D9',    // Dark Purple for buttons or highlights
          },
          orange: {
            DEFAULT: '#F97316', // Bright Orange
            light: '#FDBA74',   // Soft Orange for hover or focus states
            dark: '#EA580C',    // Dark Orange for call-to-actions
          },
        },
        // Text Color
        text: {
          light: '#FFFFFF',     // White for text on dark backgrounds
          dark: '#1F2937',      // Dark Gray for headings
          muted: '#4B5563',     // Muted Gray for subtext or descriptions
        },
      },
      fontFamily: {
        // Modern, Clean Fonts
        sans: ['Inter', 'sans-serif'],    // Clean, modern font
        serif: ['Merriweather', 'serif'], // Classic, elegant font
      },
      fontSize: {
        'h1': ['2.25rem', { lineHeight: '2.75rem' }],  // Large, bold headings
        'h2': ['1.875rem', { lineHeight: '2.25rem' }], // Medium headings
        'h3': ['1.5rem', { lineHeight: '2rem' }],      // Subheadings
        'base': ['1rem', { lineHeight: '1.5rem' }],    // Base font size for text
        'sm': ['0.875rem', { lineHeight: '1.25rem' }], // Small text
      },
    },
  },
  plugins: [],
}

