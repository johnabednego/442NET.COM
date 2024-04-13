/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        logo: '0 2px 2px 0 rgba(1, 255, 255, 1)',
        net: '0 4px 4px 0 rgba(0, 0, 0, 1)',
        navLink: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
        button:'inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1)',
        dropDown:'inset 2px 2px 2px 0px rgba(1, 255, 255, .5), 2px 2px 2px 0px rgba(1, 255, 255, .5)',
        category: '0 4px 4px 0 rgba(1, 255, 255, 1)',
        mainCategory: 'inset 0 4px 4px 0 rgba(1, 255, 255, 1)',
        ourFriends: '0 4px 4px 0 rgba(1, 27, 43, 1)',
        card: '0 4px 4px 0 rgba(170, 170, 170, 1)',
        filter: '0 10px 18px 0 rgba(0, 0, 0, 0.75)',

      },
      screens: {
        xs: "300px",
        xf: "400px",
        xm: "500px",
      },
    },
  },
  plugins: [],
}