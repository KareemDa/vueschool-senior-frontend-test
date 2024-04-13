import prose from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },

    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          lg: '4rem',
          xl: '4rem',
          '2xl': '4rem'
        },

        screens: {
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1200px',
          '2xl': '1400px'
        }
      }
    }
  },

  plugins: [prose]
}
