/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        neutral: {
          0: "#d4d4d4",
          1: "#999999",
          3: "#333333",
          4: "rgba(23, 23, 23, 0.5)",
          5: "rgba(0, 0, 0, 0.16)",
          6: "rgba(0, 0, 0, 0.08)",
          7: "#232323",
          8: "#dcdcdc",
          9:"rgba(23, 23, 23, 0.64);"
        },
        blue: {
          100: "#0057ff"
        }
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"]
      },
      backgroundColor: {
        0: "#171717",
        1: "rgba(255, 255, 255, 0.12)",
        3: "#0057ff"
      }, 
      boxShadow: {
        100: " 0px 4px 16px rgba(0, 0, 0, 0.16)",
        200 :"0px 0px 0px 1px rgba(0, 0, 0, 0.08)"
      },
    },
  },
  plugins: [],
};
