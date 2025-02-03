
/** @type {import('tailwindcss').Config} */
export default  {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  plugins: [],
  theme: {
    container: {
      center: true
    },
    screens: {

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'xxl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      'xs': '320px',

      color: {
      'white': '#fff',
      'grey': '#f4f5f6'
      },
      // fontFamily: {
      //   'font-inter': "inter"
      // }
      // => @media (min-width: 320px) { ... }
    }
  },
  variants: {
    extend: {
    }
  },
}
