/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-bg': "url('./src/assets/bg.jpg')",
      },
      backgroundSize: {
        'banner-bg': 'cover', // You can use other values like 'contain' or specific dimensions
      },
    },
  },
  plugins: [require("daisyui")],
}

