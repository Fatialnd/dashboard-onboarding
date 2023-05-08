/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        neutral: {
          0: "#171717",
          1: "#d4d4d4",
          2: "#999999",
          3: "rgba(255, 255, 255, 0.12)",
          4: "#333333",
          5: "rgba(23, 23, 23, 0.5)",
          6: "rgba(0, 0, 0, 0.16)",
          7: "rgba(0, 0, 0, 0.08)",
          8: "#232323",
          9: "#dcdcdc",
        },
        blue: {
          100: "#0057ff"
        }
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
};
