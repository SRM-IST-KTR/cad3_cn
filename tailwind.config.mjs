/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
      title: ["Bebas Neue", "sans-serif"],
      txt: ["Inter", "sans-serif"],
    },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'bebas-neue': ['"Bebas Neue"', 'sans-serif'],
        'sf' : ['SF Pro Display' , 'sans-serif']
      },
    },
  },
  plugins: [],
};