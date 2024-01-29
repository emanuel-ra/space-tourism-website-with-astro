/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#0B0D17",
        secondary: "#D0D6F9",
      },
      animation: (theme) => ({
        brightness: "brightness 1.5s infinite;",
        "spin-slow": "spin 3s linear infinite",
      }),
      keyframes: {
        brightness: {
          "0%, 100%": { filter: "brightness(1);" },
          "50%": { filter: "brightness(1.50);" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
