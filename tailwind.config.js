/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    animation: {
      blink: "blink 1s infinite",
      typewriter: "typewriter 2s steps(20) forwards",
    },
    keyframes: {
      blink: {
        "0%, 100%": { opacity: 1 },
        "50%": { opacity: 0 },
      },
      typewriter: {
        "0%": { width: "0%" },
        "100%": { width: "100%" },
      },
    },
    screens: {
      sssm: "320px",
      ssm: "500px",
      smd: "700px",
      md: "960px",
      lg: "1078px",
      xl: "1180px",
      "2xl": "1240px", // Add a custom 2xl breakpoint
      // Add a custom 3xl breakpoint
    },
    borderWidth: {
      "1": "1px",
    },
    fontFamily: {
      sans: ["Inter", "Helvetica", "Arial", "sans"],
      serif: ["Great Vibes", "serif"],
      radios: ["Radio Canada Big", "sans-serif"],
      joining: ["Satisfy", "cursive"],
      monte: ["Montserrat", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      "light-black": "rgb(20, 20, 19)",
      "fade-black": "rgb(28, 28, 26)",
      greens: "#2fff86",
      yellows: "rgb(229, 255, 0)",
      blues: "#00e1ff",
    },
    boxShadow: {
      sm: "0 1px 4px 0 rgba(0, 0, 0, 0.08)",
      lg: "0px 0px 25px rgba(0, 0, 0, 0.35)",
      md: "0px 0px 18px rgba(0, 0, 0, 0.35)",

      // box- shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    },
    backgroundImage: {
      "hero-image":
        "url('../EpicExplorerFrontend/src/images/marc-zimmer-a5QnUtau8lo-unsplash.jpg')", // Adjust the path to your image

      custom: "url('../EpicExplorerFrontend/src/images/Untitled (1).jpeg')",
    },
  },
  container: {
    center: true,
  },
};
export const plugins = [];
