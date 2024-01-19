module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "rp-black": "#313233", // Main background color
        "mj-black": "white",
        "jp-black": "#1C1E1E",
        "rp-yellow": "#2063F2", // Golden yellow for fintech
        "mj-yellow": "#007BFF", // Blue accent color for fintech
        "jp-yellow": "white",
        "ho-blue": "rgba(30,91,221,1)", // Dark green for fintech
      },
    },
    fontFamily: {
      lexend: ["Lexend Deca", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [],
};
