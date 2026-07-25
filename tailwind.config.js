/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "pixelify": ["Pixelify Sans", "monospace"],
        "pingfang": ["PingFang HK", "sans-serif"],
      },
      height: {
        'screen-dvh': '100dvh',
      },
      colors: {
        canopy: {
          DEFAULT: '#0a1a12',
          surface: '#122419',
        },
        moss: {
          DEFAULT: '#1f5c3a',
          hover: '#16472c',
          soft: '#2a7a4f',
        },
        sunleaf: '#c5e84a',
        field: '#1a7a4c',
        support: '#3dcb7a',
        clay: '#d94a38',
        navtint: {
          DEFAULT: '#eef6f1',
          muted: '#c5d9cc',
        },
      },
      dropShadow: {
        donation: '0 0 18px rgba(197, 232, 74, 0.55)',
      },
    },
  },
  plugins: [],
};
