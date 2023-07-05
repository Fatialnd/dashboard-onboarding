/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    theme: {
      screens: {
        sm: "640px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",
      },
    },
    extend: {
      spacing: {
        '72': '72px',
        '120': '120px'
      },
      content: {
        arrowdown: "url('./src/images/Vector.png')",
      },
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
          9: "rgba(23, 23, 23, 0.64);",
          10: "#0057ff",
          11: "#F6F6F6"
        },
        blue: {
          100: "#0057ff",
        },
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
      },
      backgroundColor: {
        0: "#171717",
        1: "rgba(255, 255, 255, 0.12)",
        3: "#0057ff",
      },
      boxShadow: {
        "3xl":
          "0px 4px 16px rgba(0, 0, 0, 0.16), 0px 0px 0px 1px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
