/** @type {import('tailwindcss').Config} */
module.exports = {
    
      content: ["./App.{js,ts,tsx}", "./components/**/*.{js,ts,tsx}"],
    
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        // Define custom colors for black and white theme
        colors: {
          primary: "#000000",    // Black
          secondary: "#ffffff",  // White
          background: "#1b0c40",
          surface: "#f5f5f5",
          text: "blue",
        },
        // Add a custom background image called 'whirlpool'
        backgroundImage: {
          whirlpool: "",
        },
      },
    },
    plugins: [],
  }
