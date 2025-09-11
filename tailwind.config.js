/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#00D4FF",
        secondary: "#1A1A1A",
        background: "#000000",
        surface: "#1C1C1E",
        text: "#FFFFFF",
        textSecondary: "#8E8E93",
      },
    },
  },
  plugins: [],
};
