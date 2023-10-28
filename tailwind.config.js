/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'success': {
        100: '#75B5A5',
        200: '#001308',
        300:'#4BD274',
      },
      'white': '#ffffff',
      'black': '#001308',
      'gray': {
        100: '#828F87',
        200: '#D9D9D9',
        300: '#F5F5F5',
        400: '#93939D',
      },
      'primary': {
        100 : '#237B89',
        200 : '#2079FF',
      }
        
    },
    fontSize: {
      md : '16px',
      lg : '20px',
      g : '28px',
      xl : '32px',
    },
    borderRadius: {
      'sm': '15px',
      '2sm' : '20px',
      'lg': '35px',
      'xl': '46px',
    },
    extend: {
      lineHeight: {
        '12': '60px',
      }
    },
  },
  plugins: [],
}
