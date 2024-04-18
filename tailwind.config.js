module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "tt-firs-neue": "'TT Firs Neue'",
      },
      colors: {
        primary: "#38A09D",
        lightBlue:"#3BA9CA",
        secondary: "#000000",
        primaryOpacity: "#007ABB30",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
