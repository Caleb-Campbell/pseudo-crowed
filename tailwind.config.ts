import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'textBack': '#e1dcd3',
        'darkBack': '#6a6c6b',
        'alt': '#836952',
        'darkerBack': '#313133',
        'dark-text': '#aaa7a0',
        'light-text': '#ffffff',
      },
      boxShadow: {
        'big-shadow': '-30px 30px 40px -10px rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        'sans-primary': ['PT Sans Narrow', 'sans-serif'],
        'sans-secondary': ['Abel', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;