import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Heading: ['Poppins', 'sans-serif'],
        Body: ['Saira', 'sans-serif'],
      },
      screens: {
        'xs': '375px',
        'sm': '600px',
        'md': '900px',
        'lg': '1200px',
        'xl': '1536px',
      },
      colors: {
        'blue': {
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#2196f3',
          600: '#1e88e5',
          700: '#1976d2',
          800: '#1565c0',
          900: '#0d47a1',
        },

        'amber': {
          50: '#fff8e1',
          100: '#ffecb3',
          200: '#ffe082',
          300: '#ffd54f',
          400: '#ffca28',
          500: '#ffc107',
          600: '#ffb300',
          700: '#ffa000',
          800: '#ff8f00',
          900: '#ff6f00'
        },
        'white': '#eeeee',
        'black': '#212121',
        'grey': {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
      backgroundImage: {
        'gradientToRight': 'linear-gradient(to right bottom, #424242, #3c3c3c, #353535, #2f2f2f, #292929, #292929, #292929, #292929, #2f2f2f, #353535, #3c3c3c, #424242)',
        'gradientToLeft': 'linear-gradient(to left bottom, #424242, #3c3c3c, #353535, #2f2f2f, #292929, #292929, #292929, #292929, #2f2f2f, #353535, #3c3c3c, #424242)',
        'gradientRadial': 'radial-gradient(circle, #424242, #3c3c3c, #353535, #2f2f2f, #292929, #292929, #292929, #292929, #2f2f2f, #353535, #3c3c3c, #424242)',
        'gradientToBottom': 'linear-gradient(to bottom, #424242, #3c3c3c, #353535, #2f2f2f, #292929, #292929, #292929, #292929, #2f2f2f, #353535, #3c3c3c, #424242)',
        'gradientToBottomLight': 'linear-gradient(to bottom, #eeeeee, #e5e5e5, #dbdbdb, #d2d2d2, #c9c9c9, #c9c9c9, #c9c9c9, #c9c9c9, #d2d2d2, #dbdbdb, #e5e5e5, #eeeeee)',
      }
    },
  },
  plugins: [],
};
export default config;
