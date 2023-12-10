// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    // colors: {
    //   bug: "#8bd674",
    //   dark: "#75747e",
    //   dragon: "#1582e7",
    //   electric: "#f2cb55",
    //   fairy: "#e98acc",
    //   fighting: "#eb4971",
    //   fire: "#ff9448",
    //   flying: "#829edb",
    //   ghost: "#6882d4",
    //   grass: "#8bbe8a",
    //   ground: "#f78551",
    //   ice: "#6bddce",
    //   normal: "#c5c9d6",
    //   poison: "#bd5fe9",
    //   psychic: "#ff787a",
    //   rock: "#d5c895",
    //   steel: "#4d92b4",
    //   water: "#58abf6",
    // },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
