/** @type {import('tailwindcss').Config} */
export const darkMode = 'selector';
export const content = [
  './src/**/*.{astro,html,js,jsx,ts,tsx}',
  '!./src/pages/noticias/**/*.{astro,html,js,jsx,ts,tsx}',
];
export const theme = {
  extend: {
    colors: {
      'amdi-green': '#00A000',
      'amdi-olive': '#787703',
      'amdi-white': '#FEFEFE',
      'amdi-black': '#000000',
      'amdi-maroon': '#853504',
    }
  },
};
export const plugins = [];

