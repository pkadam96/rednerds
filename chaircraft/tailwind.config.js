/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        buttonHover: {
          '0%, 100%': { transform: 'scale(1)', backgroundColor: 'rgb(131, 237, 244)' },
          '50%': { transform: 'scale(1.05)', backgroundColor: 'rgb(149, 134, 243)' },       
        },
      },
      animation: {
        'slide-in-right': 'slideInFromRight 1s ease-out forwards',
        'slide-in-left': 'slideInFromLeft 1s ease-out forwards',
        'zoom-in': 'zoomIn 0.5s ease-out forwards',
        'button-hover': 'buttonHover 0.5s ease-in-out infinite',
      },
    },
  },
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
  },
  plugins: [

  ],
}

