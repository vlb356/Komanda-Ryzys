/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                kr: {
                    darkBlue: "#122944",
                    blue: "#1662A6",
                    orange: "#E96F19",
                    gray: "#F5F5F5",
                    white: "#FFFFFF",
                },
            },
        },
    },
    plugins: [],
};
