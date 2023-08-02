/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'entrada':{
          '0%':{
            opacity: '0',

          },
          '100%': {
            opacity: '1'
          }
        },
        'slide': {
          '0%': {
            transform: 'translateX(-200px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0px)',
            opacity: '1'
          }
        },
        'delay-entrada': {
          '0%': {
            opacity: '0'
          },
          '50%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        'floating': {
          '0%': {
            transform: 'translateY(-30px)'
          },
          '50%': {
            transform: 'translateY(0px)'
          },
          '100%': {
            transform: 'translateY(-30px)'
          }
        },
        'respiro': {
          '0%':{
            boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
          },
          '40%':{
            boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            transform: 'scale(1.02)'
          },
          '100%':{
            boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
          }
        },
        'alerta': {
          '0%':{
            opacity: '0',
            scale: '0.2'
          },
          '10%': {
            opacity: '1',
            scale: '1.2'
          },
          '20%':{
            scale: '1'
          },
          '80%':{
            scale: '1'
          },
          '90%':{
            scale: '1.2',
            opacity: '1',
          },
          '100%':{
            opacity: '0',
            scale: '0'
          }
        }

      },
      animation: {
        'entrada': 'entrada 2s',
        'slide': 'slide 2s',
        'delay-entrada': 'delay-entrada 2s',
        'floating': 'floating 5s ease-in-out infinite',
        'respiro': 'respiro 5s ease-in-out infinite',
        'alerta': 'alerta 5s '
      },
            
    },
  },
  plugins: [],
}
