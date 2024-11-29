import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FBD305",
        'dark-yellow-400': "#CEAD00",
        'dark-yellow-500': "#555130",
        'black-800': "#373632",
        'black-700': "#585753",
        'black-600': "#666561",
        'black-500': "#BAB9B1",
        'light-700': "#E0DFD9",
        'light-800': "#F5F5F5"
      },
      backgroundImage: {
        bannerImg: "url('/landing_hero.png')",
        blackOverlay: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 100%)"
      }
    },
  },
  plugins: [],
} satisfies Config;
