/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        bg: "url('/bg.png')",
        'tol-gradient': 'linear-gradient(89.86deg, #5255a5 23.08%, #5d9f7f 33.94%, #fbc168 44.57%)',
        'ad-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
      },
    },
  },
  plugins: [],
}
