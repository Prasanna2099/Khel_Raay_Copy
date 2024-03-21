/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#264653',

          secondary: '#E76F51',

          accent: '#10b981',

          neutral: '#1f2937',

          'base-100': '#ffffff',

          info: '#1e40af',

          success: '#15803d',

          warning: '#eab308',

          error: '#dc2626',
        },
      },
    ],
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
}
