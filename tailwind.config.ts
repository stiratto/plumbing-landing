/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brown: '#97573D',
        darkgreen: '#3E5348',
        lightgreen: '#DDE7EB',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
};



