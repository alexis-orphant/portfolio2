/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto"],
                cursive: ["Meie Script"],
                raleway: ["Raleway", "sans-serif"],
            },
        },
    },
    plugins: [],
};
