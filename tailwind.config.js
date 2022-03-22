module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: "'Roboto', sans-serif",
    },
    extend: {
      colors: {
        "soft-black": {
          100: "#414a4c",
          200: "#3b444b",
          300: "#353839",
          400: "#232b2b",
          500: "#0e1111",
        },
      },
    },
  },
  plugins: [],
};
