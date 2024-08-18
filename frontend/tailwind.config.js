/** @type {import('tailwindcss').Config} */
// module.exports = {

//   plugins: [],
// }

// // tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      gridTemplateColumns: {
        'custom': '10px 200px 1fr 100px',
      },
    },
  },
  plugins: [],
};
