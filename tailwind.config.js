/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        '27px': '1.688rem'
      },
      height: {
        '125': '31.25rem', 
        '180': '45rem',
      }, 
      colors: {
        'yellow': '#FFC151',
        'blue': '#426AAF', 
        'darkgrey': '#4F4F4F',
        'lightgrey': '#e5e7eb',
        'translucent': 'rgba(0, 0, 0, 0.5)'
      },
      aspectRatio: {
        '4/3': '4/3'
      },
      maxWidth: {
        '9/10': '90%',
      }, 
      lineHeight: {
        '12': '3rem'
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        fadeOut: 'fadeOut 0.3s ease-in-out',
      },
      keyframes: () => ({
        fadeIn: {
          '0%': { opacity: 0, transform: `translateY(3%)` },
          '100%': { opacity: 1, transform: `translateY(0%)` },
        },
        fadeOut: {
          '0%': { opacity: 1, transform: `translateY(0%)` },
          '100%': { opacity: 0, transform: `translateY(3%)` },
        },
      }),
    },
  },
  plugins: [],
};
