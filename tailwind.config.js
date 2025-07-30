// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: 'rgb(var(--color-primary))',
          secondary: 'rgb(var(--color-secondary))',
        },
      },
    },
    plugins: [],
  };
  
  