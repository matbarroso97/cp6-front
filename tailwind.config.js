/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#e60000',     // Vermelho
        secondary: '#b30000',   // Vermelho escuro
        dark: '#0b0b0c',        // Preto do fundo
        'dark-light': '#1a1a1d', // Cinza escuro
      },
      backgroundColor: {
        'dark-bg': '#0b0b0c',
      },
    },
  },
  plugins: [],
}
