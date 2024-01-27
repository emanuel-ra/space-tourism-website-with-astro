/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#0B0D17',
        secondary: '#D0D6F9'
      }
    }
  },
  plugins: [require('tailwindcss-animated')]
}
