/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      
      Roboto: ['Roboto', 'sans-serif'],
      Arima: ['Arima Madurai', 'cursive'],
    },
    screens: {
      'mm': '375px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1920px',
    },
    borderRadius: {
      '2xl': '10rem',
      'xl': '5rem',
      'lg': '3.5rem',
      'full': '9999px',
      'mm' : '0.3rem',
      'sm': '0.5rem',
      'md': '1.1rem',
    },
    spacing: {
      px: '1px',
      0: '0px',
      0.5: '0.07rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      8.5: '2.2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      11.5: '2.9rem',
      12: '3rem',
      13: '3.4rem',
      14: '3.5rem',
      16: '4rem',
      17: '4.3rem',
      18: '4.5rem',
      19: '4.7rem',
      20: '5rem',
      21: '5.25rem',
      22: '5.5rem',
      24: '6rem',
      26: '6.2rem',
      28: '7rem',
      30: '7.5rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      42: '10.5rem',
      44: '11rem',
      45: '11.5rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      57: '14.5rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      75: '19rem',
      80: '20rem',
      85: '23.5rem',
      96: '24rem',
      5.1: '5%',
      6.1: '6%',
      7.1: '7%',
      100: "10%",
      120: "12%",
      150: "15%",
      170: "17%",
      190: "19%",
      200: "20%",
      210: "21%",
      220: "22%",
      230: "23%",
      250: "25%",
      280: "28%",
      300: "30%",
      320: "32%",
      350: "35%",
      400: "40%",
      450: "45%",
      480: "48%",
      500: "50%",
      560: "56%",
      520: "52%",
      550: '55%',
      600: "60%",
      620: "62%",
      650: "65%",
      700: "70%",
      750: "75%",
      780: "78%",
      800: "80%",
      820: "82%",
      850: "85%",
      900: "90%",
      940: "94%",
      950: "95%",
    },
    fontSize: {
      xs: ['0.75rem'],
      sm: ['0.875rem'],
      base: ['1rem'],
      lg: ['1.125rem'],
      xl: ['1.25rem'],
      '2xl': ['1.5rem'],
      '3xl': ['1.875rem'],
      '4xl': ['2.25rem'],
      '4.4xl': ['2.4rem'],
      '4.6xl': ['2.5rem'],
      '5xl': ['3rem'],
      '6xl': ['3.75rem'],
      '7xl': ['4.5rem'],
      '8xl': ['6rem'],
      '9xl': ['8rem'],
      '10xl': ['9rem'],
      '4.5xl': ['2.4rem'],
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      3: '.75rem',
      4: '1rem',
      4.5: '1.05rem',
      5: '1.25rem',
      5.5: '1.4rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      10.1: '2.85rem',
      10.5: '3.65rem',
      11:'4.9rem',
    },
    extend: {
      keyframes: {
        slideTurnRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      animation: {
        slideTurnRight: 'slideTurnRight .5s ease-in-out',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'green-1': '#3EED8B',
        'green-2': '#0A9949',
        'grey-rgba': 'rgba(255, 255, 255, 0.35)',
        'bl-rgba' : 'rgba(0, 0, 0, 0.64)',
        'sky-rgba': 'rgba(181, 232, 253, 0.64)'
      },
      dropShadow: {
        'mm-2': '3px 4px 24px rgba(0, 0, 0, 0.06)',
        'lg-2': '0 10px 8px rgba(0, 299, 134, 0.5)',
        '3xl': '0 48px 48px rgba(37, 37, 37, 0.15)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
        'b-shadow': '6px 8px 40px rgba(0, 0, 0, 0.05)',
      },

    },
  },
  plugins: [],
}
