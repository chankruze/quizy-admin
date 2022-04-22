module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
                nunito: ["Nunito", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
