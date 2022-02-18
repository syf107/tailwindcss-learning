module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        mammoth: "10rem",
      },
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [],
};
