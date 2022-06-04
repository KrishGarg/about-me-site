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
          350: "#353935",
          400: "#232b2b",
          450: "#1a1a1a",
          500: "#0e1111",
        },
      },
    },
  },
  plugins: [],
};
